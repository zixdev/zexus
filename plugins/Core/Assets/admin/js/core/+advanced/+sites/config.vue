<template>
    <v-tabs
            id="mobile-tabs-1"
            grow
            light
            scroll-bars
            v-bind:model="active"
            >
        <v-tabs-bar slot="activators">
            <v-tabs-slider></v-tabs-slider>
            <v-tabs-item
                    v-for="(tab, i) in tabs" :key="i"
                    v-bind:href="'#config-tab-' + i"
                    :title="tab.name"
            >
                <v-icon>{{ tab.icon }}</v-icon>
            </v-tabs-item>
        </v-tabs-bar>

        <v-tabs-content id="config-tab-0">
            <v-card-text>
                <general></general>
            </v-card-text>
        </v-tabs-content>
        <v-tabs-content id="config-tab-1">
            <v-card-text>
                <security></security>
            </v-card-text>
        </v-tabs-content>
        <v-tabs-content id="config-tab-2">
            <v-card-text>
                <s-e-o></s-e-o>
            </v-card-text>
        </v-tabs-content>
        <v-tabs-content id="config-tab-3">
            <v-card-text>
                <email-settings></email-settings>
            </v-card-text>
        </v-tabs-content>
        <v-tabs-content id="config-tab-4">
            <v-card-text>
                <social-api></social-api>
            </v-card-text>
        </v-tabs-content>
        <v-tabs-content id="config-tab-5">
            <v-card-text>
                <maintenance></maintenance>
            </v-card-text>
        </v-tabs-content>

    </v-tabs>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component'
    import {EmailContact, EmailSettings, General, Maintenance, Security, SEO, SocialApi} from './components';
    @Component({
        components: {
            EmailContact, EmailSettings, General, Maintenance, Security, SEO, SocialApi
        }
    })
    export default class SiteConfig extends Vue {
        active = '';
        config = {};
        tabs = [
            {
                name: 'General',
                icon: 'library_books'
            },
            {
                name: 'Security',
                icon: 'security'
            },
            {
                name: 'SEO',
                icon: 'search'
            },
            {
                name: 'Emails',
                icon: 'email'
            },
            {
                name: 'Social API',
                icon: 'share'
            },
            {
                name: 'Maintenance',
                icon: 'build'
            }
        ];

        mounted() {
            this.loadConfig();
        }

        loadConfig() {
            this.$http.get('sites/' + this.$route.params.id + '/config')
                    .then(response => {
                        let data = response.data;
                        data.map(config => {
                            this.config[config.key] = config.value;
                        });
                        this.$events.$emit('site-update-config', this.config);
                    });
        }

    }
</script>
