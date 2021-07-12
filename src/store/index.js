import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: '',
    year: '',
    month: '',
    day: '',
    join: '',
    hospitalization: '',
    continuation: '',
    message: '',
  },
  mutations: {
    updateGender(state, gender) {
      state.gender = gender;
    },
    updateYear(state, year) {
      state.year = year;
    },
    updateMonth(state, month) {
      state.month = month;
    },
    updateDay(state, day) {
      state.day = day;
    },
    updateJoin(state, join) {
      state.join = join;
    },
    updateHospitalization(state, hospitalization) {
      state.hospitalization = hospitalization;
    },
    updateContinuation(state, continuation) {
      state.continuation = continuation;
    },
    updateMessage(state, message) {
      state.message = message;
    },
  },
});
