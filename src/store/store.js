import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsLoggedIn: false,
    userId: Number,
    username: '',
    links: [
      {
        name: 'login',
        route: '/login',
      },
      {
        name: 'home',
        route: '/',
      },
    ],
  },
  mutations: {
    USER_LOGIN(state) {
      state.userIsLoggedIn = !state.userIsLoggedIn
    },
  },
  actions: {
    userLogin() {
      this.commit('USER_LOGIN')
    },
  },
  modules: {},
})
