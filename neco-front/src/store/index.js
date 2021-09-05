import Vue from 'vue';
import Vuex from 'vuex';
// import { test } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: '',
    userId: ''
  },
  mutations: {
    setTest(state, data) {
      state.test = data;
    },
    setUserId(state, userId) {
      state.userId = userId;
    }
  },
  actions: {
    TEST({ commit }) {
      commit('setTest', 'test data');
      // test()
      //   .then(({ data }) => {
      //     commit('setTest', data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  },
  modules: {}
});
