//获取列表页数据请求
import request from 'axios'
import axios from 'axios'

//获取列表页
const getList = (params, activitiId) => {

  return request({url: '/zyapproval-api/' + activitiId + '/approval', method: 'post', data: params})

}

//获取进件详细信息
const getDetail = (params, activitiId) => {
  return axios.get(localPath + '/zyapproval-api/' + activitiId + '/approval/' + params)
}

//获取风控结果信息
const getRisk = (params) => {
  return axios.get(localPath + '/zyapproval-api/approval/risk/' + params.applNo)
}

//获取风控结果信息
const getRiskDetail = (params) => {
  return axios.get(localPath + '/zyapproval-api/approval/risk/detail/' + params)
}

//获取流程备忘信息
const getMemo = (params, activitiId) => {
  return axios.get(localPath + '/zyapproval-api/' + activitiId + '/memo/' + params)
}

//获取进件codes
const getApplyCodes = (instNo) => {
  return axios.get(localPath + '/zyapproval-api/applyCodes/' + instNo)
}

//任务认领/放弃
const claimAction = (params, activitiId) => {
  return axios.post(localPath + '/zyapproval-api/' + activitiId + '/claim', params)
}

//任务认领/放弃
const claimQuery = (activitiId, applno) => {
  return axios.get(localPath + '/zyapproval-api/' + activitiId + '/claim/' + applno)
}

//暂存进件
const saveApply = (activitiId, params) => {
  return axios.put(localPath + '/zyapproval-api/' + activitiId + '/approval', params)
}

//任务提交
const complete = (activitiId, params) => {
  if (params.data) {
    params.data.detail = JSON.stringify(params.data.detail)
  }
  return axios.post(localPath + '/zyapproval-api/' + activitiId + '/approval/complete', params)
}
//导出合同
const exportAgreement = (activitiId, applicationNum, flag) => {
  return request({
    url: '/zyapproval-api/' + activitiId + '/export/getData/' + applicationNum + '/' + flag,
    method: 'get',
    responseType: 'blob',
  })
}
//导出还款计划
const exportRepayment = (activitiId, params) => {
  return request({
    url: '/zyapproval-api/' + activitiId + '/export/repayment',
    method: 'post',
    responseType: 'arraybuffer',
    data: params
  })
}
//获取code列表
const getActionCode = (processId, activitiId) => {
  return axios.get('/activiti-api/condition/' + processId + '/' + activitiId)
}
//获取code列表
const getActionAllCode = (processId) => {
  return axios.get('/activiti-api/condition/' + processId)
}

const loginByUsername = (username, password, code, randomStr) => {
  var grant_type = 'password'
  var scope = 'server'
  var url = 'auth/oauth/token?username=' + username + '&password=' + password + '&code=' + code + '&grant_type=' + grant_type + '&scope=' + scope
  return axios.post(url, null, {
    headers: {
      'Authorization': 'Basic enl0Yzp6eXRj'
    }
  })
}

//获取任务节点类型
const getTaskCode = (params) => {
  return axios.get('/activiti-api/task/map/' + params.instNo + '/' + params.productCode)
}

//默认配置
const getConfs = (params) => {
  return axios.all([getApplyCodes(params.instNo), getTaskCode(params)])
}

export function mobileLogin (mobile, code) {
  var grant_type = 'mobile'
  var scope = 'server'
  return request({
    url: '/auth/mobile/token',
    headers: {
      'Authorization': 'Basic enl0Yzp6eXRj'
    },
    method: 'post',
    params: {mobile, code, grant_type, scope}
  })
}

const getUserInfo = () => {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}
const getDic = (type) => {
  return new Promise((resolve, reject) => {
    resolve({data: {}})
  })
}
const logout = (accesstoken, refreshToken) => {
  return request({
    url: '/auth/authentication/removeToken',
    method: 'post',
    params: {accesstoken, refreshToken}
  })
}

//影像系统获取身份证信息
const getCardInfo = (params) => {
  return axios.post('/fcs-api/getMediaUrls', params)
}

//获取STS TOKEN
const getStsToken = (uploaddir) => {
  return axios.post('/fcs-api/getOssStsToken',
    '{"uploaddir":"' + uploaddir + '"}',
    {headers: {'Content-Type': 'application/json;charset=UTF-8'}}
  )
}

//保存url至影像系统
const saveToFcs = (obj) => {
  return axios.post('/fcs-api/afterUpload', JSON.stringify(obj), {headers: {'Content-Type': 'application/json;charset=UTF-8'}})
}

//调用人脸识别
const getFaceCompare = (params) => {
  return axios.get('/fcs-api/comparison/' + params.productCode + '/' + params.applNo)
}

//支付接口
const pay = (params) => {
  return axios.post(localPath + '/zyapproval-api/pay/loan/' + params.applNo + '/' + params.txCode + '/' + params.payChannel)
}

//线下放款
const offline = (params) => {
  return axios.post(localPath + '/zyapproval-api/pay/loanoff?applNo=' + params)
}

//进件二期code
const getAutoCodes = (params) => {
  return axios({url: `/zyautoapply-api/paramCode/getParamCodeList`, method: 'get', params: params})
}

//获取进件数据结构
const getStructure = (params) => {
  return axios({url: `/zyautoapply-api/structure`, method: 'get', params: params})
}

//支付阶段
const payStep = (applNo) => {
  return axios.get(localPath + '/zyapproval-api/pay/getactive?applNo=' + applNo)
}

//绑卡
const bindBankCard = (params) => {
  return axios.post(localPath + '/zyapproval-api/pay/bind', params)
}

//还款计划
const getPaymentPlan = (params) => {
  return axios.post(localPath + '/pls-api/loan/attemptCalc', params)
}

//电话预约
const getSmsListUsingPOST = params => axios({
  url: localPath + `/zyautoapply-api/sms/send`,
  method: 'post',
  data: params
})

//更新進件
const updateMydata = (params) => {
  return axios.post(localPath + '/zyapproval-api/pay/loan/updatemy', params)
}

//获取云评估价格
const getYunFang = (params) => {
  return axios.post(localPath + `/yunfang-api/house/price`, params)
}
//获取单个code
const getSingleCode = (params) => {
  return axios({url: `/zyautoapply-api/paramCode`, method: 'get', params: params})
}

// Diagram List
const getDiagramList = (params) => {
  return axios({url: `/activiti-api/rest/models`, method: 'get', params: params})
}
// Diagram Detail
const getDiagramDetail = (params) => {
  return axios({url: `/activiti-api/task/${params.instNo}/${params.productCode}`, method: 'get', params: params})
}
// Diagram Detail
const getDiagramNode = (params) => {
  return axios({url: `/activiti-api/task/${params.instNo}/${params.productCode}`, method: 'get', params: params})
}
// Diagram Detail
const getDiagramLink = (params) => {
  return axios({url: `/activiti-api/expressions`, method: 'get', params: params})
}

export {
  getList,
  getDetail,
  getRisk,
  getRiskDetail,
  getMemo,
  getApplyCodes,
  claimAction,
  claimQuery,
  complete,
  getActionCode,
  saveApply,
  // saveRemarks,
  getTaskCode,
  getConfs,
  loginByUsername,
  getUserInfo,
  logout,
  getDic,
  getCardInfo,
  // uploadImg,
  getFaceCompare,
  getStsToken,
  pay,
  getStructure,
  getAutoCodes,
  saveToFcs,
  payStep,
  bindBankCard,
  getPaymentPlan,
  exportAgreement,
  exportRepayment,
  getSmsListUsingPOST,
  getActionAllCode,
  offline,
  updateMydata,
  getYunFang,
  getSingleCode,
  getDiagramList,
  getDiagramDetail,
  getDiagramNode,
  getDiagramLink
}
