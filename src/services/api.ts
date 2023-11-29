import axios from 'axios'

const api = axios.create({
  baseURL: 'https://adonis-luis.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api