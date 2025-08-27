import { Button } from 'antd'
import { useState } from 'react'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { Outlet, useNavigate } from 'react-router'

import paths from '~/app/router/paths'
import Header from '~/components/layout/Header'
import SideBar from '~/components/layout/SideBar.tsx'

export default function DashboardLayout() {
  const navigate = useNavigate()

  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="dark:bg-layout grid h-screen grid-cols-[auto_1fr] bg-gray-100">
      <SideBar isCollapsed={isCollapsed} />

      <div className="grid h-screen grid-rows-[auto_1fr]">
        <Header isCollapsed={isCollapsed} toggleCollapsed={toggleCollapsed} />

        <main className="overflow-x-auto p-4">
          <ErrorBoundary
            fallbackRender={fallbackRender}
            onReset={() => {
              navigate(paths.home)
            }}
          >
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  )
}

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex size-full justify-center pt-32">
      <div className="text-center">
        <h1 className="my-6 text-2xl">Tizimda nosozlik yuz berdi!</h1>
        <p className="text-lg">Tizim mas'ullariga murojaat qiling!</p>
        <p className="my-6 text-red-500">{error.message}</p>
        <Button type="primary" onClick={resetErrorBoundary}>
          Asosiy menyuga qaytish
        </Button>
      </div>
    </div>
  )
}
