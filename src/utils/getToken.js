// import wepy from 'wepy'
// import wxRequset from './wxRequest'
import aes from './aes.min'
import getCode from './getCode'
const getTokenData = function() {
  let code = getCode.uuid()
  let key = aes.CryptoJS.enc.Utf8.parse('C562552B08182170')
  let ivParameter = aes.CryptoJS.getRandomIV(16)
  let iv = aes.CryptoJS.enc.Utf8.parse(ivParameter)
  let encryptCode = aes.CryptoJS.encrypt(code, key, iv)
  let params = {
    code: code,
    encryptCode: encryptCode,
    ivParameter: ivParameter
  }
  return params
}
export default {
  getTokenData
}
