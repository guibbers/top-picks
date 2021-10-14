import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsLoggedIn: false,
    userId: null,
    username: '',
  },
  mutations: {
    USER_LOGIN(state) {
      state.userIsLoggedIn = !state.userIsLoggedIn
    },
    SET_USER_ID(state, userId) {
      state.userId = userId
    },
    GET_USER_NAME(state, username) {
      state.username = username
    },
  },
  actions: {
    userLogin({ commit }) {
      commit('USER_LOGIN')
    },
    setUserId({ commit }, userId) {
      commit('SET_USER_ID', userId)
    },
    getUsername({ commit }, username) {
      commit('GET_USER_NAME', username)
    },
  },
})
