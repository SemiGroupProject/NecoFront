import Axios from 'axios';

const config = {
  baseUrl: 'https://test'
};

const api = {
  test_api: `${config.baseUrl}/test`,
  check_id_api: `${config.baseUrl}/api/members?accountId=`
};

function test() {
  return Axios.get(api.test_api);
}

function FETCH_CHECK_ID_DUPLICATION(arg) {
  return Axios.get(`${api.check_id_api}${arg}`);
}

export { test, FETCH_CHECK_ID_DUPLICATION };
