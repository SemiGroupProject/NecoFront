import Axios from 'axios';
// import Vue from 'vue';

const api = {
  signUp: '/api/join',
  checkId: '/api/members'
};

export function signUp(args) {
  return Axios.post(api.signUp, args);
}

export function checkId(params) {
  return Axios.get(api.checkId, {
    params: {
      accountId: params
    }
  });
}
