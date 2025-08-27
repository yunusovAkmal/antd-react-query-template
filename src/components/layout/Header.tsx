import { Avatar } from 'antd'
import { PanelLeftOpenIcon, PanelRightOpenIcon, User2 } from 'lucide-react'

import { useAuthStore } from '~/app/store'
import { ThemeSwitcher } from '~/components/shared'
import { AdminRoleText } from '~/components/status'
import { useAdminRole } from '~/hooks'

interface Props {
  isCollapsed: boolean
  toggleCollapsed: () => void
}

export default function Header({ isCollapsed, toggleCollapsed }: Props) {
  const full_name = useAuthStore((state) => state.user.full_name)
  const { role } = useAdminRole()
  const currentService = useAuthStore((state) => state.currentService)
  const roleData = currentService[role]

  return (
    <div className="px-4">
      <div className="dark:bg-dark-gray flex w-full items-center justify-between rounded-b-2xl rounded-br-2xl bg-white px-6 py-4 dark:text-white">
        <section className="flex items-center gap-2">
          <button
            className="hover:bg-primary dark:bg-medium-gray rounded-sm bg-gray-200 p-2 hover:cursor-pointer hover:text-white"
            onClick={toggleCollapsed}
          >
            {isCollapsed ? <PanelLeftOpenIcon size={24} /> : <PanelRightOpenIcon size={24} />}
          </button>
          <div>
            <p className="font-bold">{roleData?.name_uz}</p>
            <p className="dark:text-secondary text-sm text-gray-600">
              {currentService?.service?.name_uz}
            </p>
          </div>
        </section>

        <section className="flex items-center gap-8">
          <div>
            <ThemeSwitcher />
          </div>

          <div className="flex items-center gap-4">
            <div className="text-end">
              <p>{full_name}</p>
              <p className="dark:text-secondary text-sm text-gray-600">
                <AdminRoleText />
              </p>
            </div>
            <Avatar icon={<User2 size={20} />} size={36} />
          </div>
        </section>
      </div>
    </div>
  )
}
