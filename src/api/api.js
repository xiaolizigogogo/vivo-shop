import request from 'axios'
import axios from 'axios'

/**
 * 获取商品列表
 * @param params
 * @returns {AxiosPromise}
 */
const getGoods = (params) => {
  return request({
    url: '/shop/goods',
    method: 'get',
    params: params
  })
}
/**
 * 获取商品列表
 * @param params
 * @returns {AxiosPromise}
 */
const getGoodDetail = (params) => {
  return request({
    url: '/shop/goods/'+params.goodsId,
    method: 'get',
    params: params
  })
}
/**
 * 获取分类列表
 * @param params
 * @returns {AxiosPromise}
 */
const getCategory = (params) => {
  return request({
    url: '/shop/categorys',
    method: 'get',
    params: params
  })
}
/**
 * 获取广告位置列表
 * @param page
 * @param params
 */
const getAdPositions = (params) => {
  return request({
    url: '/shop/adPositions',
    method: 'get',
    params: params
  })
}
/**
 * 获取广告列表
 * @param
 * @param params
 */
const getAdPositionDetail = (params) => {
  return request({
    url: '/shop/adPositions/'+params.adPositionId,
    method: 'get',
    params: params
  })
}
/**
 *
 * 不分页
 * 获取购物车列表
 */
const getCarts = (params) => {
  return request({
    url: '/shop/carts/',
    method: 'get',
    params: params
  })
}
/**
 *
 * 获取优惠券类表
 */
const getCoupons = (params) => {
  return request({
    url: '/shop/coupons/',
    method: 'get',
    params: params
  })
}

/**
 *
 * 获取订单列表
 */
const getOrders = (params) => {
  return request({
    url: '/shop/orders/',
    method: 'get',
    params: params
  })
}
/**
 * 获取收货地址列表
 */
const getAddress = (params) => {
  return request({
    url: '/shop/address/',
    method: 'get',
    params: params
  })
}
/**
 * 获取我的收藏列表
 */
const getCollects = (params) => {
  return request({
    url: '/shop/collects/',
    method: 'get',
    params: params
  })
}
/**
 * 获取我的交易记录
 */
const getTrades = (params) => {
  return request({
    url: '/shop/trades/',
    method: 'get',
    params: params
  })
}
/**
 * 获取用户信息
 * @param openid
 * @param lang zh_CN
 * @param params
 */
const getWechatUserInfo = (params) => {
  return request({
    url: '/shop/wechat/getUserInfo',
    method: 'get',
    params: params
  })
}
/**
 * 获取用户信息
 * @param code
 * @param lang zh_CN
 * @param params
 */
const getWechatOAuth2UserInfo = (params) => {
  return request({
    url: '/shop/wechat//getOAuth2UserInfo',
    method: 'get',
    params: params
  })
}
  /**
   * 获取openid
   * @param code
   * @param params
   */
const getWechatOpenid = (params) => {
    return request({
      url: '/shop/wechat/getOpenid',
      method: 'get',
      params: params
    })
}
/**
 * 获取openid
 * @param code
 * @param params
 */
const getUserInfo = (params) => {
  return request({
    url: '/shop/users/user',
    method: 'get',
    params: params
  })
}
/**操作**/
/**
 * 添加商品到购物车
 * @param params
 * @returns {AxiosPromise}
 */
const addCart = (params) => {
  return request({
    url: '/shop/carts/',
    method: 'post',
    data: params
  })
}
const addAddress = (params) => {
  return request({
    url: '/shop/address',
    method: 'post',
    data: params
  })
}
  /**
   * 添加商品到购物车
   * @param params
   * @returns {AxiosPromise}
   */
  const updateCart = (params) => {
    return request({
      url: '/shop/carts/',
      method: 'put',
      data: params
    })
}
const deleteCart = (params) => {
  return request({
    url: '/shop/carts/',
    method: 'delete',
    data: params
  })}
const addOrder = (params) => {
    return request({
      url: '/shop/orders/',
      method: 'post',
      data: params
    })
}
const getAdmins=(params) => {
  return request({
    url: '/shop/admins/',
    method: 'get',
    params: params
  })
}
const addSubscribes=(params)=>{
  return request({
    url: '/shop/subscribes',
    method: 'post',
    data: params
})
}
  const getSubscribes=(params)=>{
    return request({
      url: '/shop/subscribes',
      method: 'get',
      data: params
    })
  }
 const getAdminAilviliableInfo=(params)=>
{
  return request({
    url: '/shop/admins/ailviliableInfo',
    method: 'get',
    params: params
  })
}
const getJsTicket=(params)=> {
  return request({
    url: '/shop/wechat/getJsTicket',
    method: 'get',
    params: params
  })
}
const unifiedOrder=(params)=>
{
  return request({
    url: '/shop/wxPay/getJSSDKPayInfo',
    method: 'post',
    data: params
  })
}
const getProductTypes=(params)=>{
    return request({
      url: '/shop/productTypes',
      method: 'get',
      params: params
    })
  }
const getUserInfoByOpenId=(params)=>{
  return request({
    url: '/shop/users/'+params.openid,
    method: 'get',
    params: params
  })
}


export {
  getGoods,
  getCategory,
  getWechatUserInfo,
  getWechatOAuth2UserInfo,
  getWechatOpenid,
  getAdPositions,
  getAdPositionDetail,
  getCarts,
  getAddress,
  getCollects,
  getGoodDetail,
  getCoupons,
  getOrders,
  getTrades,
  addCart,
  getUserInfo,
  updateCart,
  deleteCart,
  addOrder,
  getAdmins,
  addSubscribes,
  getSubscribes,
  getAdminAilviliableInfo,
    getJsTicket,
  unifiedOrder,
  getProductTypes,
  getUserInfoByOpenId,
  addAddress
}
