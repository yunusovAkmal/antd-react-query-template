import { Button } from 'antd'
import { LogOutIcon } from 'lucide-react'
import { Link } from 'react-router'

import { authService } from '~/api'
import SideBarMenu from '~/components/layout/SideBarMenu'
import { cn } from '~/lib/utils'

interface Props {
  isCollapsed: boolean
}

export default function SideBar({ isCollapsed }: Props) {
  return (
    <div
      className={cn('h-full w-[300px] p-2 pr-0 transition-all duration-300', {
        'w-28 overflow-hidden p-2 pr-0': isCollapsed
      })}
    >
      <div
        className={cn(
          'dark:bg-dark-gray bg-primary grid h-full grid-rows-[auto_1fr_auto] rounded-2xl p-4 transition-all duration-300',
          {
            'p-2': isCollapsed
          }
        )}
      >
        <Link className="flex h-18 items-center justify-center gap-4" to="/">
          <img
            alt="logo"
            className={cn('size-12', {
              'size-10': isCollapsed
            })}
            src="/logo_light.png"
          />
          <h1
            className={cn('text-center text-2xl font-semibold whitespace-nowrap text-white', {
              'hidden text-sm opacity-0': isCollapsed
            })}
          >
            My Edu Admin
          </h1>
        </Link>

        <div className="mt-8 overflow-auto">
          <SideBarMenu isCollapsed={isCollapsed} />
        </div>

        <div>
          <Button danger className="w-full" type="primary" onClick={authService.logoutUser}>
            {isCollapsed ? <LogOutIcon size={22} /> : 'Chiqish'}
          </Button>
        </div>
      </div>
    </div>
  )
}
