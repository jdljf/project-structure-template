/**
 * 把字符串变成整数
 * @param {String} val 需要转变成整数的字符串
 * @return {Number} 转换的整数数字
 */
export function becomeInteger(val) {
  if (typeof val === "number") {
    return val
  } else {
    return parseInt(val, 10)
  }
}

/**
 * 去除字符串空格
 * @param {String} str 要处理的字符串
 * @param {Number} type 1：前后空格 2：所有空格 3：前空格 4：后空格
 */
export function strTrim(str, type = 1) {
  becomeInteger(type)
  switch (type) {
    // 前后空格
    case 1:
      return str.replace(/(^\s*)|(\s*$)/g, "")
    // 所有空格
    case 2:
      return str.replace(/\s+/g, "")
    // 右边空格
    case 3:
      return str.replace(/(^\s*)/g, "")
    // 左边空格
    case 4:
      return str.replace(/(\s*$)/g, "")
    default:
      return str
  }
}

/**
 * 判断字符串是不是正确的手机号码
 * @param {String} phone 要验证的字符串
 * @return {Boolean} flag 是否是手机号码
 * @return {String} message 验证信息
 */
export function isMobileNumber(phone) {
  let flag = false,
    message = ""
  let mobileReg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4[579]\d{2})\d{6}$/

  if (strTrim(phone) === "") {
    message = "手机号码不能为空"
  } else if (strTrim(phone).length !== 11) {
    message = "请输入11位手机号码"
  } else if (!mobileReg.test(phone)) {
    message = "请输入有效的手机号码"
  } else {
    message = "手机号码格式正确"
    flag = true
  }
  return {
    flag,
    message
  }
}

/**
 * 判断字符串是不是正确的身份证号
 * @param {String} str 要验证的字符串
 * @return {Boolean} true: 是，false: 不是
 */
export function isIDCard(str) {
  let IDCardReg = new RegExp(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/)
  if (!!IDCardReg.test(str)) {
    return false
  }
  return true
}
