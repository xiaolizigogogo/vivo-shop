import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import shop from './shop'
import user from './user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    shop,
    state,
    mutations,
    actions,
    user
  },
})
export default store
