<template>
    <v-card>
        <v-card-title>
            {{ edit ? $t('system.sites.edit') : $t('system.sites.add')}}
        </v-card-title>
        <v-card-text>
            <form @submit.prevent="save()">
                <v-card-row>
                    <v-text-field
                            name="site_name"
                            :label="$t('table.name')"
                            v-model="site.name"
                            :rules="messages.validation.name"
                            autofocus
                            required
                            ></v-text-field>
                </v-card-row>
                <v-card-row>
                    <v-text-field
                            name="site_url"
                            :label="$t('table.url')"
                            v-model="site.url"
                            :rules="messages.validation.url"
                            required
                            ></v-text-field>
                </v-card-row>
                <v-card-row>
                    <v-text-field
                            name="site_ui"
                            :label="$t('table.ui')"
                            v-model="site.ui"
                            :rules="messages.validation.ui"
                            required
                            ></v-text-field>
                </v-card-row>
                <v-card-row>
                    <v-btn light primary :loading="$store.state.fetching" type="submit">
                        <i v-if="$store.state.fetching" class="fa fa-spinner fa-pulse"></i>
                        {{ edit ? $t('form.edit') : $t('form.create') }}
                    </v-btn>
                    <v-btn default type="reset" router :to="{name: 'system.sites.index'}">
                        {{ $t('form.cancel') }}
                    </v-btn>
                </v-card-row>
            </form>
        </v-card-text>
    </v-card>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component'
    import { mapState, mapActions } from 'vuex'

    @Component({
        computed: {
            ...mapState(['messages'])
        },
        methods: {
            ...mapActions(['resetMessages', 'setMessage'])
        }
    })
    export default class CreateEditSite extends Vue {
        site = {};
        mounted() {
            if(this.edit) {
                this.$http.get('sites/' + this.$route.params.id).then(response => this.site = response.data);
            }
        }

        save() {
            this.resetMessages();
            // if form for create
            return this.edit ? this.update() : this.create();
        }

        get edit() {
            return this.$route.params.id ? true : false;
        }

        update() {
            this.$http.put('sites/' + this.$route.params.id, this.site)
                    .then(response => {
                        this.setMessage({type: 'success', message: response.data.message})
                        this.$router.push({name: 'system.sites.index'});
                    });
        }

        create() {
            return this.$http.post('sites', this.site).then(response => {
                this.setMessage({type: 'success', message: response.data.message})
                this.$router.push({name: 'system.sites.index'});
            });
        }

    }
</script>
