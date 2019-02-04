import Http from '../../utils/http';

const fbApiKey = 'AIzaSyDPak0BcFFhk9xgPsBj7x58pEt3ZnQ8ces';
const fbVerificationEndpoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${fbApiKey}`;

// Actions for Admin //
const actions = {
  auth({ commit }, { email, password }) {
    return Http.post(fbVerificationEndpoint, {
      email,
      password,
      returnSecureToken: true,
    }).then(({ data }) => {
      commit('setCurrent', { name: data.email });
      commit('setLoggedIn');
      localStorage.setItem('token', data.idToken);
    });
  },

  logout({ commit }) {
    commit('setLoggedOut');
    localStorage.removeItem('token');
  },
};

export default actions;
