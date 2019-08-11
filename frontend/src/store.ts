import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipientEmail: '',
    userEmail: '',
  },
  mutations: {
    changeRecipEmail(state, rEmail) {
      state.recipientEmail = rEmail;
    },
    changeUserEmail(state, uEmail) {
      state.userEmail = uEmail;
    }
  },
  actions: {

  },
});
