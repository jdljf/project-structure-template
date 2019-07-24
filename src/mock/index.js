/**
 * mock api 接口的统一出口，与 @/http 文件夹对应
 */
import Mock from "mockjs"
import { mock } from "@/http/baseIP.js"

import userMock from "./api/user.js"

const mocks = [...userMock]

export function mockXHR() {
  for (const i of mocks) {
    Mock.mock(new RegExp(`${mock}${i.url}`), i.type || "get", i.response)
  }
}
