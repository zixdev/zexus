<template>
    <v-app>
        <app-side-bar></app-side-bar>
        <app-header></app-header>
        <main>
            <v-container fluid class="l-main" :style="{'min-height': windowHeight}">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </main>
        <app-snack-bar></app-snack-bar>
        <app-footer></app-footer>
    </v-app>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {AppHeader, AppFooter, AppSideBar, AppSnackBar} from './components';

    @Component({
        components: {
            AppHeader, AppFooter, AppSideBar, AppSnackBar
        }
    })
    export default class ZixAdmin extends Vue {
        mounted() {

        }

        get windowHeight() {
            return ($(window).height() - 170) + 'px';
        }


    }
</script>
