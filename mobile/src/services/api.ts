import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.107:21021',
})

export default api
