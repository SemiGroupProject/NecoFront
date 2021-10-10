import { signUp, checkId } from '../api/index.js';

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
  }
};
