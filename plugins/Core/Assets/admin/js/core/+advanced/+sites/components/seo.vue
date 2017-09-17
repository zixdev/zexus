<template>
    <form @submit.prevent="save()">
        <h4>
            SEO
        </h4>
        <v-layout wrap>
            <v-flex sm6 xs12>
                <strong>Meta Tags :</strong>
                <v-text-field
                        name="site_name"
                        :label="$t('title')"
                        v-model="config.seotools_meta_defaults_title"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="company"
                        :label="$t('description')"
                        v-model="config.seotools_meta_defaults_description"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="company"
                        :label="$t('keywords')"
                        v-model="config.seotools_meta_defaults_keywords"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
            </v-flex>
            <v-flex sm6 xs12>
                <strong>Open Graph :</strong>
                <v-text-field
                        name="site_name"
                        :label="$t('title')"
                        v-model="config.seotools_opengraph_defaults_title"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="company"
                        :label="$t('description')"
                        v-model="config.seotools_opengraph_defaults_description"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
                <v-text-field
                        name="company"
                        :label="$t('keywords')"
                        v-model="config.seotools_opengraph_defaults_keywords"
                        minlength="3"
                        maxlength="255"
                        required
                        ></v-text-field>
            </v-flex>
            <v-flex sm6 xs12>
                <strong>Twitter :</strong>
                <v-text-field
                        name="site_name"
                        :label="$t('title')"
                        v-model="config.seotools_twitter_defaults_site"
                        hint="@zixdev"
                        minlength="3"
                        maxlength="255"
                        required
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
    export default class SEO extends Vue {
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
