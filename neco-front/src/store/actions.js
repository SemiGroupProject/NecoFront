import { signUp } from '../api/index.js';

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
  }
};
