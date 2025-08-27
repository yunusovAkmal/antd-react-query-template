import { useAuthStore } from '~/app/store'
import { AdminRoleEnum } from '~/types'

type useAdminRoleResponse = {
  isTmAdmin: boolean
  isMinistryAdmin: boolean
  isRegionAdmin: boolean
  isServiceAdmin: boolean
  role: AdminRoleEnum
  isSuperAdmin: boolean
}

const SUPER_ADMIN_IDS = [77]

const mode = import.meta.env.MODE

if (mode === 'development') {
  SUPER_ADMIN_IDS.push(2)
}

export const useAdminRole = (): useAdminRoleResponse => {
  const role = useAuthStore((store) => store.currentService.role)
  const userId = useAuthStore((store) => store.user.id)

  const isTmAdmin = role === AdminRoleEnum.TM
  const isMinistryAdmin = role === AdminRoleEnum.MINISTRY
  const isRegionAdmin = role === AdminRoleEnum.REGION
  const isServiceAdmin = role === AdminRoleEnum.SERVICE
  const isSuperAdmin = SUPER_ADMIN_IDS.includes(userId)

  return { isTmAdmin, isMinistryAdmin, isRegionAdmin, isServiceAdmin, role, isSuperAdmin }
}
