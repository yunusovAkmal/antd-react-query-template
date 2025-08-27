import './Login.css'

import { Navigate, useSearchParams } from 'react-router'

import ministry_logo_light from './ministry_logo_light.png'
import one_id_logo from './one-id-logo.svg'

import { useAuthStore } from '~/app/store'
import { CONFIG } from '~/config'

export default function LoginPage() {
  const [params] = useSearchParams()
  const redirectUrl = params.get('redirect') || '/'

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (isAuthenticated) return <Navigate replace to={redirectUrl} />

  return (
    <div>
      <div className="Login">
        <aside className="Aside">
          <header>
            <img alt="ministry_logo_dark" src={ministry_logo_light} />
            <h1 className="text-lg">
              O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi
            </h1>
          </header>
          <article className="Aside_article">
            <p>My Edu</p>
          </article>
        </aside>
        <main className="Main">
          <div className="Main_formBox">
            <h1 className="text-3xl font-bold">Tizimga kirish</h1>
            <div className="Login_button">
              <a className="Login_button_link" href={CONFIG.ONE_ID_URL} role="button">
                <img alt="one id" src={one_id_logo} />
              </a>
              <div className="Ripple">
                <div className="Ripple_circle"></div>
                <div className="Ripple_circle"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              O‘zbekiston Respublikasi qonunchiligi asosida, shaxsingiz to‘g’risidagi ma’lumotlarni
              id.egov.uz tizimidan olinganini ma’lum qilamiz
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
