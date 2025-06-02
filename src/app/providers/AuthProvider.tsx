import { useEffect, type PropsWithChildren } from 'react'

import { useAuthStore } from '~/app/store/authStore'
import { GlobalSpinner } from '~/components/loaders/GlobalSpinner'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const state = useAuthStore((store) => store.state)
  const setUser = useAuthStore((store) => store.setUser)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [setUser])

  if (state === 'loading') {
    return <GlobalSpinner />
  }

  return children
}
