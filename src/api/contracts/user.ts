import { apiClient } from '~/api/http'
import type { User } from '~/types'

export const getUser = apiClient.get<User>('/user')
