import Vue from 'vue';
import Vuex from 'vuex';

// modules
import admin from './admin';
import user from './user';
import service from './service';
import shared from './shared';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
    user,
    service,
    shared,
  },
});
