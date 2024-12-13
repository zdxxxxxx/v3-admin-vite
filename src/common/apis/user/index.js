import { request } from "@/http/axios"

/** 获取当前登陆用户详情 */
export function getUserInfoApi() {
  return request({
    url: "users/info",
    method: "get"
  })
}
