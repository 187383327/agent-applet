import api from '../api/api'
import getToken from '../utils/getToken'
import wepy from 'wepy'
// 封装一个重新请求token的函数
export const refresh = function() {
  return new Promise(function(resolve, rejec) {// eslint-disable-line
    var params = getToken.getTokenData()
    console.log('参数', params)
    api.getToken(params).then(res => {
      if (res.code === '200') {
        wepy.removeStorageSync('token')
        wepy.setStorageSync('token', res.resultData)
        resolve('1')
      }
    })
  })
}
