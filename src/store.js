import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [{
      user_id: 'lsk0477', user_pw: 'sk6628gk',
    }],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess (state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    },
  },
  actions: {
    login ({ state, commit }, loginObj) {
      let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.user_id === loginObj.user_id) selectedUser = user
      })
      selectedUser === null || selectedUser.user_pw !== loginObj.user_pw
      ? commit('loginError')
      : commit('loginSuccess')
    },
  },
  modules: {

  },
})
