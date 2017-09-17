<template>
    <form @submit.prevent="save()">
        <h4>Basic Information</h4>
        <v-layout wrap>
            <v-flex sm6 xs12>
                <v-text-field
                        name="site_name"
                        :label="$t('site_title')"
                        v-model="config.app_name"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="company"
                        :label="$t('company_name')"
                        v-model="config.company_name"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="company"
                        label="Tagline"
                        v-model="config.company_tagline"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>

                <v-text-field
                        :label="$t('description')"
                        multi-line
                        v-model="config.company_description"
                        ></v-text-field>
            </v-flex>
            <v-flex sm6 xs12>
                <v-text-field
                        type="email"
                        name="email"
                        :label="$t('email')"
                        v-model="config.site_contact_email"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="phone"
                        :label="$t('phone')"
                        v-model="config.site_contact_phone"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="phone"
                        :label="$t('fix')"
                        v-model="config.site_contact_fix"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>

                <v-text-field
                        :label="$t('address')"
                        multi-line
                        v-model="config.site_contact_address"
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
    export default class General extends Vue {
        config = {};

        mounted() {
            this.$events.$on('site-update-config', conf => this.config = conf)
        }

        save() {
            this.$http.post('sites/' + this.$route.params.id + '/config', this.config)
                    .then(response => this.setMessage({type: 'success', message: response.data.message}))
        }
    }
</script>
