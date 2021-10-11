import Vue from 'vue';
import Axios from 'axios';
import store from '../store';
import jwt_decode from 'jwt-decode';

Vue.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  }
});

function enhanceAccessToeken() {
  const token = Vue.$VueCookies.get('token');
  if (token) {
    Axios.defaults.headers.common['authorization'] = token;
    const decoded_token = jwt_decode(token);
    store.commit('SET_ID', decoded_token.sub);
  }
}

enhanceAccessToeken();
