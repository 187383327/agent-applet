// 通过import把wepy导入到当前脚本中
import wepy from 'wepy'
const weRequset = {}

// weRequset.get = (url, params = {}) => {
//   // console.log(global)

//   wepy.request({
//     url: weRequset.baseUrl + url, // 开发者服务器接口地址",
//     data: params, // 请求的参数",
//     method: 'GET',
//     dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
//     header: params.header || {
//       'Content-type': 'application/json'
//     }
//   }).then(res => {
//     if (res.statusCode === 200) {
//       return res.data
//     }
//   })
// }

// weRequset.post = (url, params) => {
//   console.log('POST', url, params)
//   wepy.request({
//     url: weRequset.baseUrl + url, // 开发者服务器接口地址",
//     data: params, // 请求的参数",
//     method: 'POST',
//     dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
//     header: params.header || {
//       'Content-type': 'application/json'
//     }
//   }).then(res => {
//     if (res.statusCode === 200) {
//       return res.data
//     }
//   })
// }

function promiseRequest(url, params) {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: weRequset.baseUrl + url, // 开发者服务器接口地址",
      data: params, // 请求的参数",
      method: 'POST',
      dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      header: params.header || {
        'Content-type': 'application/json'
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
function checkStatus (response) {
  console.log('checkStatus', response)
  if (response && (response.statusCode === 200 || response.statusCode === 304 || response.statusCode === 400)) {
    return response
  }
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  if (res.statusCode === -404) {
    console.error('网络异常', res)
    throw res
  }
  // if (errCodeCtrl[res.data.code]) {
  //   errCodeCtrl[res.data.code](res)
  //   return res
  // }
  if (res.data.code === '200' && res) {
    return res
  }
  throw res
}

weRequset.post = (url, data) => {
  return promiseRequest({
    url, data, method: 'POST'
  }).then((res) => {
    return checkStatus(res)
  }).then((res) => {
    return checkCode(res)
  })
}
weRequset.get = (url, data) => {
  return promiseRequest({
    url, data, method: 'GET'
  }).then((res) => {
    return checkStatus(res)
  }).then((res) => {
    return checkCode(res)
  })
}
  // postForm: (url, data) => {
  //   return promiseRequest({
  //     url,
  //     data,
  //     method: 'POST',
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded'
  //     }
  //   })
  // }
  // uploadFile: (file, fileName) => {
  //   let loginToken = wepy.getStorageSync('loginToken') || ''
  //   return wepy.uploadFile({
  //     url: config.apiPath + '/ydmanage/image/uploadImage', // 仅为示例，非真实的接口地址
  //     filePath: file,
  //     name: 'file',
  //     header: {
  //       loginToken
  //     },
  //     formData: {
  //       fileName
  //     }
  //   })
  // }

// 设置基本的url路径
// weRequset.baseUrl = ''
export default weRequset
