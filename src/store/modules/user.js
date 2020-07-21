import { GET_USERINFO, SET_USERINFO, CLEAR_USERINFO } from './mutation-types'
import api from '@/api/user'
const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    [SET_USERINFO]: (state, userInfo) => {
      state.userInfo = userInfo
    },
    [CLEAR_USERINFO]: (state) => {
      state.userInfo = {}
    }
  },
  actions: {
    [GET_USERINFO]({ commit }, payload) {
      return new Promise(function (resolve, reject) {
        api.userInfo(payload).then((data) => {
          commit(SET_USERINFO, data)
          resolve()
        }, (err) => {
          commit(CLEAR_USERINFO)
          reject(err)
        })
      })
    },
    [CLEAR_USERINFO]({ commit }) {
      return new Promise(function (resolve, reject) {
        commit(CLEAR_USERINFO)
        resolve()
      })
    }
  }
}

export default user
