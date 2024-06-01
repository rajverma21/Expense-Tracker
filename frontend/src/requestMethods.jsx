import axios from 'axios'

const BASE_URL = 'https://expense-tracker-pi-mauve.vercel.app'

const publicRequest = axios.create({
  baseURL: BASE_URL
})

export default publicRequest
