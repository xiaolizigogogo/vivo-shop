import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
// 把默认配置withCredentials改为true，就可以允许跨域携带cookie信息了
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/gateway'

export default axios
