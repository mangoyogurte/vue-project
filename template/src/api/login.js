import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/login/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function logout(token) {
  return request({
    url: '/login/logout',
    method: 'post',
    data: {
      api_token:token
    }
  })
}
