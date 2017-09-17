<template>
    <v-snackbar bottom v-model="snackbar" >
        {{ snackbar_message }}
        <v-btn light flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
</template>

<script type="text/babel">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { mapState, mapActions } from 'vuex';
    import { isEmpty } from 'lodash';

    @Component({
        computed: {
            ...mapState(['messages']),
            hasSuccessMessage() {
                return this.messages.success !== ''
            },
            hasErrorMessages() {
                return this.messages.error.length > 0
            },
            hasValidationMessages() {
                return !isEmpty(this.messages.validation)
            }
        }
    })
    export default class SnackBar extends Vue {
        get snackbar() {
            return (this.hasSuccessMessage || this.hasErrorMessages || this.hasValidationMessages) ? true : false;
        }
        get snackbar_message() {
            if (this.hasSuccessMessage) return this.messages.success;
            if (this.hasErrorMessages) return 'Oops looks like something went wrong please check again later!';
            if (this.hasValidationMessages) return 'Please Check your inputs';
        }
    }
</script>
