// 1.0.1引入封装的weRequse方法
import wxRequset from '../utils/wxRequest'
// 1.0.2引入全局路径
import appConfig from '../utils/appConfig'
// 1.0.3设置请求API的根路径
wxRequset.baseUrl = `${appConfig.HTTP_BAST_URL}`

// 微信登录获取token
const getToken = params => wxRequset.get('/TOKEN/verification/assistantToken', params).then(res => res)
// 微信登录获取token
// const getToken = params => wxRequset.get('/CDB-TOKEN/verification/assistantToken', params).then(res => res)
// 1.0.4封装请求API,类似axios
/**
 * 小程序登录
 * GET
 *  @param
 * loginName:用户名
 * password:密码
 *role
 */
const login = params => wxRequset.post('/AGENT/login', params).then(res => res)
/**
 * 提现明细列表
 * GET
 *  @param
 * id:商家id
 */
const getDepList = params => wxRequset.get('/FINANCE/withdraw/list', params).then(res => res)
/**
 * 提现进度详情
 * GET
 *  @param
 * id:商家id
 */
const getDepDetail = params => wxRequset.get('/FINANCE/withdraw/detail', params).then(res => res)
/**
 * 设备列表信息
 * GET
 *  @param
 * id:商家id
 */
const getDeviceInfo = params => wxRequset.get('/AGENT/buggys', params).then(res => res)
// 修改头像的方法
/**
 * 修改用户头像
 * GET
 *  @param
 * id:用户id
 */
// let id = wepy.getStorageSync('principalId')

// const changeImg = params => wxRequset.get(`USER/user/${id}/avatar`, params).then(res => res)
/**
 * 获取首页设备信息
 * GET
 *  @param
 * id:商家id
 */
// let id = wepy.getStorageSync('agentialId')
// const getHomeDevice = () => wxRequset.get(`/AGENT/agents/buggy-statistical/${id}`).then(res => res)
/**
 * 获取系统信息
 * GET
 *  @param
 * id:商家id
 */
const getSystemInfo = params => wxRequset.get('/AGENT/tagentmessages', params).then(res => res)
/**
 * 获取头像
 * GET
 *  @param
 * id:商家id
 */
const getHeadImg = params => wxRequset.get('/USER/user/avatar', params).then(res => res)
/**
 * 首页获取收入
 * GET
 *  @param
 * id:商家id
 */
// let agentId = wepy.getStorageSync('agentialId')
const getRental = () => wxRequset.get(`/FINANCE/program/agent/3`).then(res => res)
/**
 * 获取首页钱包信息
 * GET
 *  @param
 * id:商家id
 */
const getHomeMoney = params => wxRequset.get('/AGENT/agents', params).then(res => res)
/**
 * 获取首页钱包信息
 * GET
 *  @param
 * id:商家id
 */
const depositCheck = params => wxRequset.post('/FINANCE/account', params).then(res => res)
/**
 * 获取首页钱包信息
 * GET
 *  @param
 * id:商家id
 */
const feedback = params => wxRequset.post('/AGENT/agent/feedbacks', params).then(res => res)
/**
 * 用户反馈列表
 * GET
 *  @param
 * id:商家id
 */
const getUserBack = params => wxRequset.get('/WX/user/feedbacks', params).then(res => res)
// /**
//  * 读完反馈后的修改
//  * PUT
//  *  @param
//  * id:消息id
//  */
const readFeedback = params => wxRequset.put(`/WX/user/feedback-reading`, params).then(res => res)
// /**
//  * 删除上传的图片
//  *
//  *  @param
//  * id:消息id
//  */
const deletePhoto = params => wxRequset.post(`/AGENT/agent/delete-file-wx`, params).then(res => res)

export default {
  getToken,
  login,
  getDepDetail,
  getDepList,
  getDeviceInfo,
  getSystemInfo,
  getHeadImg,
  getRental,
  getHomeMoney,
  depositCheck,
  feedback,
  getUserBack,
  readFeedback,
  deletePhoto
}
