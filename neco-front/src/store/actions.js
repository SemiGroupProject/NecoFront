import Vue from 'vue';
import jwt_decode from 'jwt-decode';
import { signUp, checkId, login } from '../api/index.js';

export default {
  signUp(_, args) {
    return new Promise((resolve, reject) => {
      signUp(args)
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  checkId(_, params) {
    return new Promise((resolve) => {
      checkId(params).then(({ data }) => {
        resolve(data);
      });
    });
  },
  login(context, args) {
    return new Promise((resolve, reject) => {
      login(args)
        .then(({ data }) => {
          const token = data.result.data;
          const { sub } = jwt_decode(token);
          context.commit('SET_ID', sub);
          Vue.$VueCookies.set('token', token);
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  }
};
