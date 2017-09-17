<template>
    <form @submit.prevent="save()">
        <h4>Maintenance</h4>
        <v-layout wrap >
            <v-flex xs12>
                <div class="form-group">
                    <label>{{$t('maintenance_active')}}</label>
                    <input type="checkbox"  v-model="config.maintenance_active">
                </div>
                <div class="form-group">
                    <label>{{$t('debug_mode')}}</label>
                    <input type="checkbox"  v-model="config.debug_mode">
                </div>
                <!--<v-checkbox :label="$t('enabled')" primary  v-model="config.maintenance_active" />-->
                <!--<v-checkbox :label="$t('debug_mode')" primary v-model="config.app_debug" />-->
                <v-text-field
                        name="site_name"
                        :label="$t('site_title')"
                        v-model="config.app_name"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-select
                        v-bind:items="modes"
                        v-model="config.maintenance_type"
                        :label="$t('maintenance_type')"
                        single-line
                        auto
                        />
                <v-text-field
                        :label="$t('maintenance_message')"
                        multi-line
                        v-model="config.maintenance_message"
                        ></v-text-field>
            </v-flex>

        </v-layout>
        <v-btn primary light :loading="$store.state.fetching" type="submit">
            <i v-if="$store.state.fetching" class="fa fa-spinner fa-pulse"></i>
            {{ $t('form.save') }}
        </v-btn>
        <v-btn default type="reset" router :to="{name: 'system.sites.index'}">
            {{ $t('form.cancel') }}
        </v-btn>
    </form>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component'
    import { mapState, mapActions } from 'vuex'

    @Component({
        computed: mapState(['messages']),
        methods: mapActions(['resetMessages', 'setMessage'])
    })
    export default class Maintenance extends Vue {
        config = {maintenance_active: false, app_debug: false, maintenance_type: {id: 0}};
        modes = ['down', 'up', 'coming']

        mounted() {
            let $this = this;
            this.$events.$on('site-update-config', conf => {
                $this.$set(this, 'config', conf)
            });
        }

        save() {
            this.$http.post('sites/' + this.$route.params.id + '/config', this.config)
                    .then(response => this.setMessage({type: 'success', message: response.data.message}))
        }

    }
</script>
