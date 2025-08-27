import type { CreateAxiosDefaults } from 'axios'

import { AxiosClient } from './AxiosClient'
import { HttpInterceptor } from './HttpInterceptor'

import { CONFIG } from '~/config'

const options: CreateAxiosDefaults = {
  baseURL: CONFIG.HOST,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30_000 // default 30s
}

export const apiClient = new AxiosClient(options, new HttpInterceptor())

export const STALE_TIME = {
  ONE_MINUTE: 60_000,
  FIVE_MINUTES: 300_000,
  TEN_MINUTES: 600_000,
  FIFTEEN_MINUTES: 900_000,
  THIRTY_MINUTES: 1800_000,
  ONE_HOUR: 3600_000,
  TWO_HOURS: 7200_000,
  FOUR_HOURS: 14400_000,
  EIGHT_HOURS: 28800_000
}
