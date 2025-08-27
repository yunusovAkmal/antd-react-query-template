import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

import paths from '~/app/router/paths'
import { useAuthStore } from '~/app/store'
import { GlobalSpinner } from '~/components/loaders'

interface Props {
  children: React.ReactNode
}

export const RequireService = ({ children }: Props) => {
  const { pathname } = useLocation()
  const adminServices = useAuthStore((store) => store.services)
  const updateState = useAuthStore((store) => store.updateState)
  const currentService = useAuthStore((store) => store.currentService)
  const navigate = useNavigate()

  const [_, _slug, serviceId] = pathname.split('/')

  useEffect(() => {
    const service = adminServices.find((service) => service.service.id.toString() === serviceId)

    if (service) {
      updateState({ currentService: service })
    } else {
      navigate(paths.home)
    }
  }, [adminServices, serviceId, updateState, navigate])

  if (!currentService) {
    return <GlobalSpinner />
  }

  return children
}
