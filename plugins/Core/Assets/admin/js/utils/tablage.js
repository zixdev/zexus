import Vue from 'vue';
import queryString from 'qs';


export default class DataTables extends Vue {
    api_url = '';
    search = '';
    totalItems = 0;
    items = [];
    loading = true;
    pagination = {rowsPerPage: 10};
    eloquent = [
        { text: 'All', value: 'active' },
        { text: 'Deleted', value: 'trashed' }
    ];
    eloquent_status = 'active';

    initTablage(url) {
        this.api_url = url;
        this.$watch('pagination', () => {
            this.getDataFromApi();
        }, {deep: true})

        this.$watch('search', () => this.getDataFromApi());
        this.$watch('eloquent_status', () => this.getDataFromApi());

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
            if(header.value == this.pagination.sortBy) index_sort = i;
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
}