import Vue from 'vue';
import queryString from 'qs';
import TableSettings from './table-settings.vue';

Vue.component('data-table-settings', TableSettings);


export default class DataTables extends Vue {
    api_url = '';
    search = '';
    totalItems = 0;
    items = [];
    loading = true;
    headers = [];
    pagination = {rowsPerPage: 10};
    eloquent = ['active', 'trashed'];
    //eloquent = [
    //    {text: 'All', value: 'active'},
    //    {text: 'Deleted', value: 'trashed'}
    //];
    eloquent_status = 'active';

    initTablage(name) {
        this.api_url = name;
        this.getUserTableConfig(name);
        this.setWatchers();

        this.getDataFromApi();
    }

    get query() {
        let columns = [];
        let index_sort = 0;
        let i = 0;
        this.headers.map(header => {
            columns.push({
                searchable: header.searchable,
                orderable: header.sortable,
                data: header.value,
                name: header.text
            });
            if (header.value == this.pagination.sortBy) index_sort = i;
            i++;
        });

        let order = [
            {
                column: index_sort,
                dir: (this.pagination.descending) ? 'desc' : 'asc'
            }
        ];
        return {
            draw: this.pagination.page,
            eloquent: this.eloquent_status, // 'trashed'
            start: ((this.pagination.rowsPerPage * this.pagination.page) - this.pagination.rowsPerPage),
            length: this.pagination.rowsPerPage,
            search: {
                value: this.search,
                regex: false
            },
            columns,
            order
        }
    }

    setWatchers() {
        this.$watch('pagination', () => {
            this.getDataFromApi();
        }, {deep: true})

        this.$watch('search', () => this.getDataFromApi());
        this.$watch('eloquent_status', () => this.getDataFromApi(), {deep: true});

        /*
         * On user updated columns
         * updated the current table columns
         */
        this.$events.$on('update-table-headers', columns => this.headers = columns);
    }


    getDataFromApi() {
        this.loading = true
        this.$http.get(this.api_url + this.serialize(this.query))
            .then(res => {
                this.items = res.data.data
                this.totalItems = res.data.recordsTotal;
                this.loading = false
            })

    }

    serialize(obj) {
        return '?' + queryString.stringify(obj)
    }

    /*
     * Soft Delete Helpers
     */
    deleteData(id) {
        this.$http.delete(`${this.api_url}/${id}?action=delete`)
            .then(res => this.getDataFromApi());
    }

    restoreData(id) {
        this.$http.delete(`${this.api_url}/${id}?action=restore`)
            .then(res => this.getDataFromApi());
    }

    forceDeleteData(id) {
        this.$http.delete(`${this.api_url}/${id}?action=force-delete`)
            .then(res => this.getDataFromApi());
    }

    getUserTableConfig(key) {
        this.$http.get(`user/config/tables.${key}`)
            .then(res => {
                let data = res.data;
                if(!this.isObject(data)) data = JSON.parse(data);
                this.headers = data.map(column => {
                    return {
                        text: this.$t('table.'+column.value),
                        left: column.left,
                        value: column.value,
                        sortable: column.sortable,
                        searchable: column.searchable
                    }
                });
            });

    }

    isObject(val) {
        return val instanceof Object;
    }
}