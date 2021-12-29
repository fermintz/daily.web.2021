import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Meta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(Meta, {
  keyName:'metaInfo',
  attribute:'data-vue-meta',
  ssrAttribute:'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation:true,
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
