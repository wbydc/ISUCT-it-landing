import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './plugins/v-mask';
import './plugins/vue-smooth-scroll';
import '@babel/polyfill';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import i18n from './plugins/i18n';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
