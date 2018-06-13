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
  /**
   * 获取广告列表
   * @param
   * @param params
   */
}
  const getAdPositionDetail = (params) => {
    return request({
      url: '/shop/adPositions/'+params.adPositionId,
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
  getAdPositionDetail
}
