<template>
    <v-card>
        <v-card-title>
            {{ $t('pages.add') }}
        </v-card-title>
        <v-card-text>
            <form @submit.prevent="save()">
                <v-card-row>
                    <v-text-field
                            name="username"
                            :label="$t('table.username')"
                            v-model="user.username"
                            :rules="messages.validation.username"
                            required
                            minlength="3"
                            maxlength="255"
                            ></v-text-field>
                </v-card-row>
                <v-card-row>
                    <v-text-field
                            name="email"
                            type="email"
                            :label="$t('table.email')"
                            v-model="user.email"
                            :rules="messages.validation.email"
                            required
                            minlength="3"
                            maxlength="255"
                            ></v-text-field>
                </v-card-row>
                <v-card-row v-if="!edit">
                    <v-text-field
                            name="password"
                            type="password"
                            :label="$t('table.password')"
                            v-model="user.password"
                            :rules="messages.validation.password"
                            required
                            v-bind:required="!edit"
                            minlength="3"
                            maxlength="255"
                            ></v-text-field>
                </v-card-row>
                <v-card-row v-if="!edit">
                    <v-text-field
                            name="password_confirmation"
                            type="password"
                            :label="$t('table.password_confirmation')"
                            v-model="user.password_confirmation"
                            :rules="messages.validation.password_confirmation"
                            v-bind:required="!edit"
                            minlength="3"
                            maxlength="255"
                            ></v-text-field>
                </v-card-row>
                <v-card-row>
                    <v-btn primary :loading="$store.state.fetching" type="submit">
                        <i v-if="$store.state.fetching" class="fa fa-spinner fa-pulse"></i>
                        {{ edit ? $t('form.edit') : $t('form.create') }}
                    </v-btn>
                    <v-btn default type="reset">
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
        computed: {
            ...mapState(['messages'])
        },
        methods: {
            ...mapActions(['resetMessages', 'setMessage'])
        }
    })
    export default class CreateUser extends Vue {
        menu = {
            accept_terms: true
        };
        mounted() {
            if(this.edit) {
                this.$http.get('users/' + this.$route.params.id).then(response => this.user = response.data);
            }
        }

        get edit() {
            return this.$route.params.id ? true : false;
        }

        save() {
            this.resetMessages();
            // if form for create
            return this.edit ? this.update() : this.create();
        }

        update() {
            this.$http.put('users/' + this.$route.params.id, this.user)
                    .then(response => {
                        this.setMessage({type: 'success', message: response.data.message})
                        this.$router.push({name: 'accounts.users.index'});
                    });
        }

        create() {
            return this.$http.post('users', this.user).then(response => {
                this.setMessage({type: 'success', message: response.data.message})
                this.$router.push({name: 'accounts.users.index'});
            });
        }

    }
</script>
