<template>
    <div>
        <v-layout>
            <v-flex md4>
                <v-expansion-panel>
                    <v-expansion-panel-content >
                        <div slot="header">Custom Links</div>
                        <v-card>
                            <v-card-text>
                                <form @submit.prevent="addToMenu()">
                                    <v-card-row>
                                        <v-text-field
                                                :label="$t('table.name')"
                                                v-model="link.name"
                                                required
                                                ></v-text-field>
                                    </v-card-row>
                                    <v-card-row>
                                        <v-text-field
                                                :label="$t('table.url')"
                                                v-model="link.url"
                                                required
                                                ></v-text-field>
                                    </v-card-row>
                                    <v-card-row>
                                        <v-text-field
                                                :label="$t('table.title')"
                                                v-model="link.title"
                                                hint="Text On hover"
                                                required
                                                ></v-text-field>
                                    </v-card-row>
                                    <v-card-row>
                                        <v-btn  small light default outline type="submit">
                                            {{ edit_menu ? 'Update Link' : 'Add To Menu' }}
                                        </v-btn>
                                        <v-btn v-if="!edit_menu" small light default outline type="reset">
                                            Cancel
                                        </v-btn>
                                    </v-card-row>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content >
                        <div slot="header">Pages</div>
                        <v-card>
                            <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
            <v-flex md8>
                <v-card>
                    <v-card-title>
                        {{ edit ? $t('menu.edit') : $t('menu.add') }}
                    </v-card-title>
                    <v-card-text>
                        <form @submit.prevent="save()">
                            <v-card-row>
                                <v-text-field
                                        name="username"
                                        :label="$t('table.name')"
                                        v-model="menu.name"
                                        :rules="messages.validation.name"
                                        required
                                        minlength="3"
                                        maxlength="255"
                                        ></v-text-field>
                            </v-card-row>
                            <v-card-row>
                                <div class="dd">
                                    <ol class="dd-list">
                                        <li class="dd-item" v-for="link in menu.items"
                                            :data-description="link.description"
                                            :data-url="link.url"
                                            :data-name="link.name"
                                            :data-id="link.id"
                                                >
                                            <div class="dd-handle">
                                                {{ link.name }}
                                                <span class="pull-right dd-nodrag">
                                                    <a class="menu-delete" ><i class="fa fa-trash-o"></i></a>
                                                    <a @click="editLink(link)" class="menu-edit" ><i class="fa fa-edit"></i></a>
                                                </span>
                                            </div>

                                            <ol v-if="link.children" class="dd-list">
                                                <li class="dd-item" v-for="child in link.children"
                                                    :data-description="child.description"
                                                    :data-url="child.url"
                                                    :data-name="child.name"
                                                    :data-id="child.id"
                                                        >
                                                    <div class="dd-handle">
                                                        {{ child.name }}
                                                        <span class="pull-right dd-nodrag">
                                                            <a class="menu-delete" ><i class="fa fa-trash-o"></i></a>
                                                            <a @click="editLink(child)" class="menu-edit" ><i class="fa fa-edit"></i></a>
                                                        </span>
                                                    </div>
                                                    <ol v-if="child.children" class="dd-list">
                                                        <li class="dd-item" v-for="sub in child.children"
                                                            :data-description="sub.description"
                                                            :data-url="sub.url"
                                                            :data-name="sub.name"
                                                            :data-id="sub.id"
                                                                >
                                                            <div class="dd-handle">
                                                                {{ sub.name }}
                                                        <span class="pull-right dd-nodrag">
                                                            <a class="menu-delete" ><i class="fa fa-trash-o"></i></a>
                                                            <a @click="editLink(sub)" class="menu-edit" ><i class="fa fa-edit"></i></a>
                                                        </span>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                            </v-card-row>
                            <v-card-row>
                                <v-btn primary light :loading="$store.state.fetching" type="submit">
                                    <i v-if="$store.state.fetching" class="fa fa-spinner fa-pulse"></i>
                                    {{ edit ? $t('form.edit') : $t('form.create') }}
                                </v-btn>
                                <v-btn router default dark :to="{name: 'appearance.menu.index'}">
                                    {{ $t('form.cancel') }}
                                </v-btn>
                            </v-card-row>
                        </form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>

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
    export default class CreateMenu extends Vue {
        menu = {
            name: '',
            items: []
        };
        new_menu = false;
        edit_menu = false;
        link= {
            name: '',
            url: '',
            permission: '',
            description: ''
        };


        mounted() {
            if(this.edit) {
                this.$http.get('menu/' + this.$route.params.id)
                        .then(res => this.updateMenu(res.data));
            } else {
                $('.dd').nestable();
            }

            /**
             * When form title changes.
             * Slug will be updated.
             */
            this.$watch('link.name', (title, val) => {
                this.link.url = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '-');
                this.link.title = 'View ' + title + ' Page';
            });

            $('body').on('click', '.menu-delete', function (e) {
                e.preventDefault();
                $(this).closest('li').remove();
                return false;
            });

        }

        addToMenu() {
           if(!this.edit_menu) {
               let link = this.link;
               this.menu.items.push({...link, id: (this.menu.items.length + 1)})
           }
            $('.dd').nestable();
            this.link = {
                name: '',
                url: '',
                permission: '',
                description: ''
            }
            this.edit_menu = false;
        }

        editLink(link) {
            this.link = link;
            this.new_menu = true;
            this.edit_menu = true;
        }

        get edit() {
            return this.$route.params.id ? true : false;
        }

        updateMenu(data) {
            this.menu = data;
            this.menu.items = JSON.parse(data.items);
            $('.dd').nestable();
        }

        save() {
            this.resetMessages();
            // if form for create
            return this.edit ? this.update() : this.create();
        }

        update() {
            console.log(this.getSubmitObj())
            return this.$http.put('menu/' + this.$route.params.id, this.getSubmitObj()).then(response => {
                this.setMessage({type: 'success', message: response.data.message})
                this.$router.push({name: 'appearance.menu.index'});
            });
        }

        create() {
            return this.$http.post('menu', this.getSubmitObj()).then(response => {
                this.setMessage({type: 'success', message: response.data.message})
                this.$router.push({name: 'appearance.menu.index'});
            });
        }

        getSubmitObj() {
            let links = $('.dd').nestable('serialize');
            links = JSON.stringify(links);
            return {
                name: this.menu.name,
                items: links
            };
        }

    }
</script>
