import Axios from 'axios';

const config = {
  baseUrl: 'https://test'
};

const api = {
  test_api: `${config.baseUrl}/test`
};

function test() {
  return Axios.get(api.test_api);
}

export { test };
