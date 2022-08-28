// 处理用户相关请求
import request from '@/utils/request'
import store from '@/store'
export const login = date => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    date
  })
}
// 发送验证码
export const getSmsCode = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/sms',
    headers: {
      Auttttt: `Beeeee ${store.state.user.token}`
    }
  })
}
