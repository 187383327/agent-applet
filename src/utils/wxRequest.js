import wepy from 'wepy'
const weRequset = {}

weRequset.get = (url, params = {}) => {
  // console.log(global)

  return new Promise((resolve, reject) => {
    console.log('路径', weRequset.baseUrl + url)
    wepy.request({
      url: weRequset.baseUrl + url, // 开发者服务器接口地址",
      data: params, // 请求的参数",
      method: 'GET',
      dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      header: params.header || {
        'Content-type': 'application/json'
      }
    }).then(res => {
      if (res.statusCode === 200) {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

weRequset.post = (url, params) => {
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
      if (res.statusCode === 200) {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
weRequset.delete = (url) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: weRequset.baseUrl + url, // 开发者服务器接口地址",
      method: 'DELETE',
      dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      header: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      if (res.statusCode === 200) {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
weRequset.put = (url, params) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: weRequset.baseUrl + url, // 开发者服务器接口地址",
      data: params, // 请求的参数",
      method: 'PUT',
      dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      header: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      if (res.statusCode === 200) {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
weRequset.baseUrl = ''
export default weRequset
