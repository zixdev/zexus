<template>
    <v-card>
        <v-card-title>
            {{ $t('accounts.users.index_title') }}
        </v-card-title>
        <v-app-bar>
            <data-table-settings class="hidden-sm-and-down" name="pages" :columns.sync="headers"></data-table-settings>
            <v-select
                    class="hidden-sm-and-down"
                    v-bind:items="eloquent"
                    v-model="eloquent_status"
                    :label="$t('table.filter-data')"
                    ></v-select>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-text-field
                    append-icon="search"
                    :label="$t('table.search')"
                    single-line
                    hide-details
                    v-model="search"
                    ></v-text-field>
        </v-app-bar>
        <v-data-table
                v-bind:headers="headers"
                v-bind:items="items"
                v-bind:search="search"
                v-bind:pagination.sync="pagination"
                :total-items="totalItems"
                :loading="loading"
                class="elevation-1"
                >

            <template slot="items" scope="props">
                <td v-for="header in headers" :class="{'text-xs-right': !header.left}">{{ props.item[header.value] }}</td>

                <td v-if="eloquent_status == 'active'">
                    <v-btn small dark default outline router :to="{name: 'pages.edit', params: {id: props.item.id}}">
                        {{$t('table.edit')}}
                    </v-btn>
                    <v-btn small dark default outline v-on:click.native="deleteData(props.item.id)">
                        {{$t('table.delete')}}
                    </v-btn>
                </td>
                <td v-else>
                    <v-btn small dark error outline v-on:click.native="forceDeleteData(props.item.id)">
                        {{$t('table.force-delete')}}
                    </v-btn>
                    <v-btn small dark default outline v-on:click.native="restoreData(props.item.id)">
                        {{$t('table.restore')}}
                    </v-btn>
                </td>
            </template>
        </v-data-table>
        <v-btn class="btn--add" dark primary floating router :to="{name: 'accounts.users.create'}"  v-tooltip:left="{html: $t('accounts.users.create')}">
            <v-icon light>add</v-icon>
        </v-btn>
    </v-card>
</template>
<script type="text/babel">
    import Component from 'vue-class-component';
    import DataTables from '../../../libraries/tablage';

    @Component
    export default class AllUsers extends DataTables {

        mounted() {
            this.initTablage('users');
        }

    }
</script>
