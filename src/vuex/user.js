import {
  getUserInfo,
  sendPhoneMessage,
  // registered,
  editUserInfo,
} from '../api/api';
import {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage
} from '@/utils/mixin';
import {
  Toast
} from 'mint-ui';
const user={
  state:{

  },
  mutations:{

  },
  actions:{
    GetUserInfo({ //获取用户信息
                  commit,
                  state
                }, parameterData) {
      return new Promise((resolve, reject) => {
        getUserInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SendPhoneMessage({ //获取验证码
                       commit,
                       state
                     }, parameterData) {
      return new Promise((resolve, reject) => {
        sendPhoneMessage(parameterData).then(response => {
          if (response.Code !== 0) return Toast({
            message: response.Message,
            position: 'bottom'
          })
          return resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    EditUserInfo({ //注册账号
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        editUserInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
  }
}
export default user
