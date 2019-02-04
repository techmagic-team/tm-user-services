import Http from '../../utils/http';

// Actions for Service //
const actions = {
  fetchList({ commit }) {
    Http.get('services.json')
      .then(({ data }) => {
        commit('setList', data);
      });
  },

  create({ commit }, service) {
    Http.post('services.json', service)
      .then(({ data }) => {
        commit('create', { ...service, id: data.name });
      });
  },

  delete({ commit }, id) {
    Http.delete(`services/${id}.json`)
      .then(() => {
        commit('delete', id);
      });
  },

  update({ commit }, { service, id }) {
    Http.put(`services/${id}.json`, service)
      .then(() => {
        commit('update', { service, id });
      });
  },

  addUserToService({ commit }, { userId, serviceId }) {
    Http.patch(`services/${serviceId}/users.json`, { [userId]: userId })
      .then(() => {
        commit('addUser', { userId, serviceId });
      });
  },

  removeUserFromService({ commit }, { serviceId, userId }) {
    Http.delete(`services/${serviceId}/users/${userId}.json`)
      .then(() => {
        commit('removeUser', { userId, serviceId });
      });
  },
};

export default actions;
