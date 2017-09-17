<template>
    <form @submit.prevent="save()">
        <h4>Email Sender</h4>
        <v-layout wrap>
            <v-flex sm6 xs12>
                <v-text-field
                        name="name"
                        :label="$t('name')"
                        v-model="config.mail_from_name"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>

            </v-flex>
            <v-flex sm6 xs12>
                <v-text-field
                        type="email"
                        name="email"
                        :label="$t('email')"
                        v-model="config.mail_from_address"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
            </v-flex>
            <v-flex md12>
                <strong>Driver ({{ config.mail_driver }})</strong>
            </v-flex>
            <v-flex md12>
                <v-select
                        v-bind:items="drivers"
                        v-model="config.mail_driver"
                        :label="$t('mail_system')"
                        dark
                        single-line
                        auto
                        />

                <v-layout v-if="config.mail_driver == 'smtp'" wrap>
                    <v-flex md5>
                        <v-text-field
                                name="host"
                                :label="$t('host')"
                                v-model="config.mail_host"
                                minlength="3"
                                maxlength="255"
                                ></v-text-field>

                    </v-flex>
                    <v-flex md5 offset-md2>
                        <v-text-field
                                name="port"
                                type="number"
                                :label="$t('port')"
                                v-model="config.mail_port"
                                minlength="3"
                                maxlength="255"
                                ></v-text-field>
                    </v-flex>
                    <v-flex md5>
                        <v-text-field
                                name="username"
                                :label="$t('username')"
                                v-model="config.mail_username"
                                minlength="3"
                                maxlength="255"
                                ></v-text-field>

                    </v-flex>
                    <v-flex md5 offset-md2>
                        <v-text-field
                                name="password"
                                type="password"
                                :label="$t('password')"
                                v-model="config.mail_password"
                                minlength="3"
                                maxlength="255"
                                ></v-text-field>
                    </v-flex>
                </v-layout>
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
    export default class EmailSettings extends Vue {
        config = {};
        drivers = ['smtp', 'mail', 'sendmail', 'mailgun', 'mandrill', 'sparkpost', 'ses'];

        mounted() {
            this.$events.$on('site-update-config', conf => this.config = conf)
        }

        save() {
            this.$http.post('sites/' + this.$route.params.id + '/config', this.config)
                    .then(response => this.setMessage({type: 'success', message: response.data.message}))
        }

    }
</script>
