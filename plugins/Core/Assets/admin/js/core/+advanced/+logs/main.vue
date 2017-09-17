<template>
    <v-card>
        <v-card-title>
            {{ $t('system.logs.index')}}
            <v-spacer></v-spacer>
            <v-text-field
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    v-model="search"
                    ></v-text-field>
        </v-card-title>
        <v-data-table
                v-bind:headers="headers"
                v-bind:items="items"
                v-bind:search="search"
                v-bind:pagination.sync="pagination"
                >
            <template slot="headers" scope="props">
        <span v-tooltip:bottom="{ 'html': props.item.text }">
          {{ props.item.text }}
        </span>
            </template>
            <template slot="items" scope="props">
                <td>{{ props.item.date }}</td>
                <td class="text-xs-right">
                    <v-icon :class="props.item.level_img+'--text'" dark>{{ props.item.level_img}} </v-icon>
                    {{ props.item.level }}
                </td>
                <td class="text-xs-right">
                    <v-edit-dialog class="l-log-dialog">
                        {{ props.item.text.substring(0, 30) }}  ...
                        <v-alert
                                :error="props.item.level_img == 'error'"
                                :warning="props.item.level_img == 'warning'"
                                :info="props.item.level_img == 'info'"
                                v-bind:value="true"
                                 slot="input">
                            {{ props.item.text }}
                        </v-alert>

                    </v-edit-dialog>

                </td>
            </template>
        </v-data-table>
    </v-card>

</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    @Component
    export default class SystemLogs extends Vue {
        items = [];
        headers = [
            {
                text: 'Date',
                left: true,
                sortable: true,
                value: 'date'
            },
            {text: 'Level', value: 'level'},
            {text: 'Content', value: 'content', searchable: true},
        ];
        search = '';
        pagination = {rowsPerPage: 10};
        selected = [];

        mounted() {
            this.$http.get('logs')
                    .then(res => this.items = res.data.logs)
        }

    }
</script>
<style>
    .l-log-dialog .small-dialog__content  {
        padding: 0;margin: 0;
    }
</style>