import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import '@/assets/css/global.scss';
import '@/assets/css/global-font.scss';
import vueCookies from 'vue-cookies'

Vue.use(vueCookies);
Vue.$cookies.config(60);
Vue.use(Vuetify);

export default new Vuetify({});
