export function repTemplate(data, code = 200, success = true, message = "") {
  return {
    data,
    success,
    message,
    code
  }
}
