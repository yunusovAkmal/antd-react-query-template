import { useEffect, type PropsWithChildren } from 'react'

import { getAdminServices, storageService } from '~/api'
import { useAuthStore } from '~/app/store/authStore'
import { GlobalSpinner } from '~/components/loaders/GlobalSpinner'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const state = useAuthStore((store) => store.state)
  const updateState = useAuthStore((store) => store.updateState)

  useEffect(() => {
    const token = storageService.getAccessToken()

    if (!token) return

    getAdminServices()
      .then((services) => {
        const user = services[0].admin
        updateState({
          user,
          services,
          isAuthenticated: true,
          state: 'finished'
        })
      })
      .catch(() => {
        updateState({
          isAuthenticated: false,
          state: 'finished'
        })
      })
  }, [updateState])

  if (state === 'loading') {
    return <GlobalSpinner />
  }

  return children
}
