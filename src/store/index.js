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
  actions: {
    commitGender(store, gender) {
      store.commit('updateGender', gender);
    },
    commitYear(store, year) {
      store.commit('updateYear', year);
    },
    commitMonth(store, month) {
      store.commit('updateMonth', month);
    },
    commitDay(store, day) {
      store.commit('updateDay', day);
    },
    commitJoin(store, join) {
      store.commit('updateJoin', join);
    },
    commitHospitalization(store, hospitalization) {
      store.commit('updateHospitalization', hospitalization);
    },
    commitContinuation(store, continuation) {
      store.commit('updateContinuation', continuation);
    },

    commitMessage(store, message) {
      store.commit('updateMessage', message);
    },
  },
  getters: {
    getGender(state) {
      return state.gender;
    },
    getYear(state) {
      return state.year;
    },
    getMonth(state) {
      return state.month;
    },
    getDay(state) {
      return state.day;
    },
    getJoin(state) {
      return state.join;
    },
    getHospitalization(state) {
      return state.hospitalization;
    },
    getContinuation(state) {
      return state.continuation;
    },
    getMessage(state) {
      return state.message;
    },
  },
});
