import axios from 'axios'

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000', // Use localhost se a variável de ambiente não estiver definida
})

export default api