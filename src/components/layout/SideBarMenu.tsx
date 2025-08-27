import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router'

import type { ServiceSlugEnum } from '~/types'

import { useThemeStore } from '~/app/store'
import { useMenu } from '~/hooks'

interface Props {
  isCollapsed: boolean
}

export default function SideBarMenu({ isCollapsed }: Props) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const theme = useThemeStore((state) => state.theme)

  const [_, slug, serviceId, menuKey] = pathname.split('/')

  const menuItems = useMenu(slug as ServiceSlugEnum)

  return (
    <div className="flex justify-center">
      <Menu
        defaultSelectedKeys={['home']}
        inlineCollapsed={isCollapsed}
        inlineIndent={12}
        items={menuItems.filter((item) => !item.hidden)}
        mode="inline"
        selectedKeys={[menuKey || 'applications']}
        theme={theme}
        onClick={({ key: path }) => {
          navigate(`/${slug}/${serviceId}/${path}`)
        }}
      />
    </div>
  )
}
