import Mock from "mockjs"
import { repTemplate } from "@/mock/template.js"

// 获取 mock.Random 对象
const Random = Mock.Random
//使用mockjs模拟数据

export default [
  {
    url: "/user/login",
    type: "post",
    response: res => {
      let { userName } = !!res.body ? JSON.parse(res.body) : {}

      if (userName === "123") {
        //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
        let list = []
        for (let i = 0; i < 30; i++) {
          let listObject = {
            title: Random.csentence(5, 10), //随机生成一段中文文本。
            company: Random.csentence(5, 10),
            attention_degree: Random.integer(100, 9999), //返回一个随机的整数。
            photo: Random.image("114x83", "#00405d", "#FFF", "Mock.js")
          }
          list.push(listObject)
        }
        return repTemplate(list)
      } else {
        return repTemplate("", 512, false, "账号或密码错误")
      }
    }
  }
]

// export default Mock
