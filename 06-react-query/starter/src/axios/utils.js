import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:4000/api/tasks',
  headers: {
    Accept: 'application/json',
  },
})
