/**
 * mock api 接口的统一出口，与 @/http 文件夹对应
 */
import userMock from "./api/user.js"

export default {
  ...userMock
}
