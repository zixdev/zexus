<template>
    <v-navigation-drawer class="l-sidebar  elevation-20" persistent light v-model="sidebar">
        <v-list dense>
            <template v-for="(item,i) in router">
                <v-list-group v-if="item.children">
                    <v-list-item slot="item">
                        <v-list-tile ripple>
                            <v-list-tile-avatar>
                                <v-icon>{{ item.meta.icon }}</v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-title v-text="$t(item.name)"/>
                            <v-list-tile-action>
                                <v-icon>keyboard_arrow_down</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-item>
                    <v-list-item v-for="(subItem,i) in valid(item.children)" :key="i">
                        <v-list-tile ripple router :to="{name: subItem.name}">
                            <v-list-tile-title v-text="$t(subItem.name)"/>
                        </v-list-tile>
                    </v-list-item>
                </v-list-group>
                <v-subheader v-else-if="item.header" v-text="item.header"/>
                <v-divider v-else-if="item.divider" light/>
                <v-list-item v-else>
                    <v-list-tile ripple router :to="{name: item.name}">
                        <v-list-tile-avatar>
                            <v-icon>{{ item.meta.icon }}</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-title v-text="$t(item.name)"/>
                    </v-list-tile>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import routes from '../core';
    import { mapGetters } from 'vuex';

    @Component({
        computed: mapGetters(['sidebar'])
    })
    export default class Sidebar extends Vue {
        shouldShowNavigation = true;

        get router() {
            return this.valid(routes)
        }

        valid(routes) {
            return routes.filter(route => route.meta.menu);
        }

    }
</script>
<style type="text/scss" lang="scss" rel="stylesheet/scss">
    .l-sidebar {
        padding-top: 60px;
    }
</style>