// Mutations for Service //
const mutations = {
  setList(state, services) {
    state.services = services;
  },

  create(state, service) {
    state.services = { ...state.services, [service.id]: service };
  },

  delete(state, id) {
    const services = { ...state.services };
    delete services[id];

    state.services = services;
  },

  update(state, { service, id }) {
    state.services = { ...state.services, [id]: service };
  },

  addUser(state, { userId, serviceId }) {
    const services = { ...state.services };
    services[serviceId].users = services[serviceId].users
      ? { ...services[serviceId].users, [userId]: userId }
      : { [userId]: userId };

    state.services = services;
  },

  removeUser(state, { userId, serviceId }) {
    const services = { ...state.services };
    delete services[serviceId].users[userId];

    state.services = services;
  },
};

export default mutations;
