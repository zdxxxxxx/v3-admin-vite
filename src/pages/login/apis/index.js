import { request } from "@/http/axios"

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request({
    url: "login/code",
    method: "get"
  })
}

/** 登录并返回 Token */
export function loginApi(data) {
  return request({
    url: "users/login",
    method: "post",
    data
  })
}
