import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.42.63:21021',
})

export default api
