/**
 * 判断变量的类型
 * @param {any} val 需要判断类型的变量
 * @return {any} 变量的类型
 */
export function typeOfValue(val) {
  return Object.prototype.toString
    .call(val)
    .replace(/\[|\]/g, "")
    .split(" ")[1]
    .toLowerCase()
}

/**
 * 防抖函数
 * @param {Function} fn 校验函数
 * @param {Number} wait 延迟时间，默认 500 毫秒
 * @param {*} immeditate 是否立即执行，默认不是立即执行
 * @example debounce(function(){console.log('debounce')})()
 */
export function debounce(fn, wait = 500, immeditate = false) {
  let timer = null

  return function() {
    let args = arguments,
      that = this
    if (immeditate && !timer) {
      fn.apply(that, args)
    }

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(that, args)
    }, wait)
  }
}

/**
 * 节流函数
 * @param {Function} fn 校验函数
 * @param {Number} wait 延迟时间，默认 500 毫秒
 * @param {*} immeditate 是否立即执行，默认不是立即执行
 * @example throttle(function(){console.log('throttle')})()
 */
export function throttle(fn, wait = 500, immeditate = false) {
  let timer = null
  let callNow = immeditate

  return function() {
    let that = this,
      args = arguments

    if (callNow) {
      fn.apply(that, args)
      callNow = false
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(that, args)
        timer = null
      }, wait)
    }
  }
}
