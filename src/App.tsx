import { Toaster } from 'sonner'

import AntdConfigProvider from '~/app/providers/AntdConfigProvider'
import { AuthProvider } from '~/app/providers/AuthProvider'
import ReactQueryProvider from '~/app/providers/ReactQueryProvider'
import { RouterProvider } from '~/app/providers/RouterProvider'

const App = () => {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <AntdConfigProvider>
          <RouterProvider />

          <Toaster closeButton richColors duration={4000} expand={true} position="top-center" />
        </AntdConfigProvider>
      </ReactQueryProvider>
    </AuthProvider>
  )
}

export default App
