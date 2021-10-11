import Axios from 'axios';

const api = {
  signUp: '/api/join',
  checkId: '/api/members',
  login: '/api/login',
  categoryList: '/api/category'
};

function signUp(args) {
  return Axios.post(api.signUp, args);
}

function checkId(params) {
  return Axios.get(api.checkId, {
    params: {
      accountId: params
    }
  });
}

function login(args) {
  return Axios.post(api.login, args);
}

function categoryList() {
  return Axios.get(api.categoryList);
}

export { signUp, checkId, login, categoryList };
