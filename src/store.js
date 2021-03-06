import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
// import { route } from '../../backend/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess (state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
      router.push({ name: 'Main' })
    },
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout (state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
      localStorage.removeItem('access_token')
    },
  },
  actions: {
    login ({ commit, dispatch }, loginObj) {
      axios
        .post('/api/super/login', loginObj)
        .then(res => {
          if (res.data.result_code === 'success') {
            var token = res.data.token
            // 토큰을 로컬스토리지에 저장 실제로는 user_id
            localStorage.setItem('access_token', token)
            this.dispatch('getMemberInfo')
          } else {
            alert('아이디와 비밀번호를 확인하세요.')
            commit('loginError')
          }
        })
        .catch(() => {
          alert('아이디와 비밀번호를 확인하세요.')
          commit('loginError')
        })
    },
    logout ({ commit }) {
      commit('logout')
      router.push({ name: 'Login' })
    },
    getMemberInfo ({ commit }) {
      var token = localStorage.getItem('access_token')
      var config = {
        headers: {
          'access-token': token,
        },
      }
      axios
        .get('/api/super/user/info', config)
        .then(res => {
          if (res.data.result_code === 'success') {
            var userInfo = res.data
            commit('loginSuccess', userInfo)
          } else {
            commit('loginError')
          }
        }).catch(() => {
          alert('아이디와 비밀번호를 확인하세요.')
        })
    },
  },
  getters: {

  },
})
