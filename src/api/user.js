// 处理用户相关请求
import request from '@/utils/request'
export const login = date => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    date
  })
}
