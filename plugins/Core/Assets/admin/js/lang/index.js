import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n)

const messages = {
    en: {
        login: 'Login'
    }
}

const LOCAL_LANG = 'en'

const i18n = new VueI18n({
    locale: LOCAL_LANG, // set locale
    silentTranslationWarn: true,
    messages // set locale messages
})

axios.post('/api/lang/set-admin', {lang: LOCAL_LANG})
    .then(response => {
        i18n.setLocaleMessage(LOCAL_LANG, response.data.trans)
    })
export default i18n;
