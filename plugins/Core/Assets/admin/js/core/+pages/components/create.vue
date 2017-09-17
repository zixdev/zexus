<template>
    <v-card>
        <v-card-title>
            {{ $t('pages.add') }}
        </v-card-title>
        <v-card-text>
            <form @submit.prevent="save()">
                <v-card-row>
                    <v-text-field
                            name="input-1"
                            :label="$t('table.title')"
                            v-model="page.title"
                            :rules="messages.validation.title"
                            ></v-text-field>
                </v-card-row>
                <v-card-row>
                    <v-text-field
                            name="input-1"
                            :label="$t('table.slug')"
                            v-model="page.slug"
                            :rules="messages.validation.slug"
                            disabled
                            ></v-text-field>
                </v-card-row>
                <v-card-row>
                    <v-select
                            :label="$t('table.sites')"
                            :items="sites"
                            v-model="page.sites"
                            item-text="name"
                            item-value="id"
                            item-title="ui"
                            multiple
                            chips
                            :rules="messages.validation.sites"
                            >
                    </v-select>
                </v-card-row>
                <v-card-row>
                    <froala :tag="'textarea'" :config="editorConfig" v-model="page.content"
                            :rules="messages.validation.content"></froala>
                </v-card-row>

                <!--Meta Tags-->
                <v-card-row>
                    <v-expansion-panel >
                        <v-expansion-panel-content>
                            <div slot="header">SEO Tags</div>
                            <v-card>
                                <v-card-text>
                                    <v-card-row>
                                        <v-text-field
                                                name="seo_title"
                                                :label="$t('seo.title')"
                                                v-model="page.seo.title"
                                                ></v-text-field>
                                    </v-card-row>
                                    <v-card-row>
                                        <v-text-field
                                                name="seo_keywords"
                                                :label="$t('seo.keywords')"
                                                v-model="page.seo.keywords"
                                                ></v-text-field>
                                    </v-card-row>
                                    <v-card-row>
                                        <v-text-field
                                                name="seo_description"
                                                :label="$t('seo.description')"
                                                v-model="page.seo.description"
                                                required
                                                ></v-text-field>
                                    </v-card-row>
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-card-row>

                <v-card-row>
                    <v-switch label="Status (Disabled/Enabled)" primary v-model="page.status"/>
                </v-card-row>

                <v-card-row>
                    <v-btn light primary :loading="$store.state.fetching" type="submit">
                        <i v-if="$store.state.fetching" class="fa fa-spinner fa-pulse"></i>
                        {{ edit ? $t('form.edit') : $t('form.create') }}
                    </v-btn>
                    <v-btn default type="reset" router :to="{name: 'pages.index'}">
                        {{ $t('form.cancel') }}
                    </v-btn>
                </v-card-row>
            </form>
        </v-card-text>

    </v-card>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { mapState, mapActions } from 'vuex';

    @Component({
        computed: mapState(['messages']),
        methods: mapActions(['resetMessages', 'setMessage'])
    })
    export default class CreatePage extends Vue {
        editorConfig = {
            height: 200,
            width: '100%'
        }
        page = {
            title: '',
            slug: '',
            content: '',
            sites: [],
            seo: {
                title: '',
                description: '',
                keywords: ''
            },
            status: true
        };
        expand = true;
        sites = []


        mounted() {
            /**
             * When form title changes.
             * Slug will be updated.
             */
            this.$watch('page.title', (title, val) => {
                this.page.slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '-')
            })

            /*
             * Load The Sites Data
             */
            this.$http.get('sites').then(res => this.sites = res.data.data);

            /*
             * Load Page Data If Edit Mode
             */
            this.edit ? this.updateEditPage() : false;
        }

        get edit() {
            return this.$route.params.id ? true : false;
        }

        save() {
            this.resetMessages();

            // if form for create
            return this.edit ? this.update() : this.create();
        }

        create() {
            return this.$http.post('pages', this.page).then(response => {
                this.setMessage({type: 'success', message: response.data.message})
                this.$router.push({name: 'pages.index'});
            });
        }

        update() {
            return this.$http.put(`pages/${this.$route.params.id}`, this.page).then(response => {
                this.setMessage({type: 'success', message: response.data.message})
                this.$router.push({name: 'pages.index'});
            });
        }

        updateEditPage() {
            this.$http.get(`pages/${this.$route.params.id}`).then(response => {
                this.page = response.data;
                this.page.sites = this.page.sites.map(site => site.id.toString());
                this.page.status = this.page.status ? true : false;
            })
        }
    }
</script>
