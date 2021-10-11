import Vue from 'vue';
import VueCookies from 'vue-cookies';

// Vue.$cookies.config('7d');

// export default {
//   install(Vue) {
//     Vue.prototype.$VueCookies = VueCookies;
//   }
// };

Vue.$VueCookies = VueCookies;
Object.defineProperty(Vue.prototype, '$VueCookies', {
  get() {
    return VueCookies;
  }
});
