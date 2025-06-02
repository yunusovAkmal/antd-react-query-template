import type { CreateAxiosDefaults } from 'axios'
import { AxiosClient } from './AxiosClient'
import { HttpInterceptor } from './HttpInterceptor'

export const HOST = import.meta.env.SERVER_URL || 'https://emis.e-edu.uz/api/v1'

const options: CreateAxiosDefaults = {
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30_000 // default 30s
}

export const apiClient = new AxiosClient(options, new HttpInterceptor())
