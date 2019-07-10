/**
 * localStorage 或者 sessionStorage 的数据处理封装
 */
export default {
  /**
   * 获取sessionStorage的键值
   * @param {String} name 键值名
   */
  getSesStorage(name) {
    return window.sessionStorage.getItem(name)
  },
  /**
   * 设置sessionStorage的键值
   * @param {String} name 键值名
   * @param {String} value 键值
   */
  setSesStorage(name, value) {
    return window.sessionStorage.setItem(name, value)
  },
  /**
   * 设置sessionStorage的键值数据
   * @param {String} name 键值名
   */
  removeSesStorage(name) {
    return window.sessionStorage.removeItem(name)
  }
}
