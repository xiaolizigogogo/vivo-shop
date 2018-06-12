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

}

export {
  getGoods,
  getCategory
}
