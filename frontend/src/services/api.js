import axios from 'axios'

const api = axios.create({
  baseURL: 'https://job-flow-xi.vercel.app/api',
  withCredentials: true
})

export default api