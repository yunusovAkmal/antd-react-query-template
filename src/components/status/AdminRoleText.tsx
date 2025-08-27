import { useAdminRole } from '~/hooks'
import { AdminRoleEnum } from '~/types'

export const AdminRoleText = () => {
  const { role } = useAdminRole()

  return <span>{roles[role]}</span>
}

const roles = {
  [AdminRoleEnum.MINISTRY]: 'Vazirlik admini',
  [AdminRoleEnum.REGION]: 'Hudud admini',
  [AdminRoleEnum.TM]: "Ta'lim muassasa admini",
  [AdminRoleEnum.SERVICE]: 'Servis admini'
}
