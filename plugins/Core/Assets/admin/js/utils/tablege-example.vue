<template>
    <v-card>
        <v-card-title>
            Test
            <v-spacer></v-spacer>
            <v-text-field
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    v-model="search"
                    ></v-text-field>
            <br>
        </v-card-title>
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
                <td>{{ props.item.id }}</td>
                <td class="text-xs-right">{{ props.item.username }}</td>
                <td class="text-xs-right">{{ props.item.email }}</td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script type="text/babel">
    import Component from 'vue-class-component';
    import DataTables from '../../../utils/tablage';

    @Component({})
    export default class AllPages extends DataTables {

        headers = [
            {text: 'Id', left: true, value: 'id', sortable: true, searchable: true},
            {text: 'Username', value: 'username', sortable: true, searchable: true},
            {text: 'Email', value: 'email', sortable: true, searchable: true}
        ];

        mounted() {
            this.initTablage('users');
        }

    }
</script>
