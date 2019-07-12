import request from "@/http/config.js"
import { mock, api } from "@/http/baseIP.js"

/**
 * 用户模块的接口
 */
export default {
  login({ userName, password }) {
    let isMock = true
    let url = isMock ? `${mock}/login` : `${api}/login`

    return request.post(url, {
      userName,
      password
    })
  }
}
