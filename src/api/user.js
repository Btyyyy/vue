// 处理用户相关请求
import request from '@/utils/request'
export const login = date => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    date
  })
}

export const getSmsCode = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
