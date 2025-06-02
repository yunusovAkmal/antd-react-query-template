import { BrowserRouter, Route, Routes } from 'react-router'
import paths from '~/app/router/paths'

import HomePage from '~/pages/HomePage'
import LoginPage from '~/pages/auth/LoginPage'

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        {/* PRIVATE ROUTES */}
        <Route path={paths.login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
