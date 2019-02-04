import store from './../store';

export default (to, from, next) => {
  if (store.getters['admin/isLoggedIn']) {
    next();
  } else {
    next('sign-in');
  }
};
