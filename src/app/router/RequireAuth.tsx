import { Navigate, useLocation } from 'react-router'

import paths from '~/app/router/paths'
import { useAuthStore } from '~/app/store/authStore'

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate replace to={`${paths.login}?redirect=${pathname}`} />
  }

  return children
}
