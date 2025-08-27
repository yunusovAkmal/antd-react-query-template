import { Button } from 'antd'
import { useNavigate, useSearchParams } from 'react-router'

import paths from '~/app/router/paths'

export default function AuthErrorPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const error = searchParams.get('error')

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold text-red-700">
        One ID tizimi bilan kirishda xatolik yuz berdi
      </p>
      <div>{error}</div>
      <div>
        <Button type="primary" onClick={() => navigate(paths.login)}>
          Qayta urinish
        </Button>
      </div>
    </div>
  )
}
