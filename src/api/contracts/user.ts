import { useGet } from '~/api/contracts/crud'
import { apiClient, STALE_TIME } from '~/api/http'
import { type AdminService, type QueryParam, type UserPersonalInfo } from '~/types'

export const getAdminServices = () => apiClient.get<AdminService[]>('/admin/cabinet/service/')

export const usePersonalInfoById = (userId?: QueryParam) =>
  useGet<UserPersonalInfo>(
    `/admin/cabinet/user/${userId}/`,
    {},
    { enabled: !!userId, staleTime: STALE_TIME.ONE_HOUR }
  )
