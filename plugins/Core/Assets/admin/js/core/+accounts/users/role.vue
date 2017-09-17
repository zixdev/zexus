<template>
    <v-card>
        <v-card-title>
            {{ $t('accounts.users.roles') }}
        </v-card-title>
        <v-card-text>
            <form @submit.prevent="save()">
                <v-card-row>

                    <v-select
                            v-bind:items="roles"
                            v-model="user_roles"
                            label="Select"
                            item-text="name"
                            item-value="id"
                            multiple
                            chips
                            light
                            />
                </v-card-row>
            </form>
        </v-card-text>
    </v-card>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component'

    @Component
    export default class UserRoles extends Vue {
        roles = [];
        user_roles = [];
        mounted() {
            // get all available roles
            this.$http.get('roles').then(res => this.roles = res.data.data);
            // get this user roles
            this.$http.get('users/' + this.$route.params.id + '/roles').then(res => this.user_roles = res.data.roles);
        }

        save() {

        }

    }
</script>
