import Axios from 'axios';
// import Vue from 'vue';

const api = {
  signUp: '/api/join'
};

export function signUp(args) {
  return Axios.post(api.signUp, args);
}
