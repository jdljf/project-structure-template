import request from "@/http/config.js"
import { mock, api } from "@/http/baseIP.js" // 域名

/**
 * 用户模块的接口
 */
export default {
  login({ userName, password }) {
    let isMock = true
    let url = isMock ? `${mock}/user/login` : `${api}/user/login`

    return request.post(url, {
      userName,
      password
    })
  }
}
