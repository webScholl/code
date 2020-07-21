import request from '@/utils/require'

export default {
  login(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  userInfo(params) {
    return request({
      url: '/userInfo',
      method: 'get',
      params
    })
  }
}
