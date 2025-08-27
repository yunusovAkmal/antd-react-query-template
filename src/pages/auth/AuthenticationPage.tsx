import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { toast } from 'sonner'

import { authService, getAdminServices, storageService } from '~/api'
import paths from '~/app/router/paths'
import { useAuthStore } from '~/app/store'
import { GlobalSpinner } from '~/components/loaders/GlobalSpinner'

const AuthenticationPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const updateState = useAuthStore((store) => store.updateState)
  const code = searchParams.get('code')

  useEffect(() => {
    async function authenticateUser() {
      if (!code) {
        toast.error('OneID bilan ulanishda xatolik yuz berdi')
        return
      }

      try {
        const response = await authService.authenticateUser(code)

        storageService.setAccessToken(response.access_token)
        storageService.setRefreshToken(response.refresh_token)

        const services = await getAdminServices()

        const user = services[0].admin

        updateState({
          services,
          user,
          isAuthenticated: true,
          state: 'finished'
        })

        navigate(paths.home)
      } catch {
        navigate(paths.oneIdError)
      }
    }

    authenticateUser()
  }, [code, navigate, updateState])

  if (!code) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className="text-2xl font-bold">OneID bilan ulanishda xatolik yuz berdi</h1>
        <p className="text-sm">Iltimos, qayta urining.</p>
      </div>
    )
  }

  return <GlobalSpinner />
}

export default AuthenticationPage
