import { Toaster } from 'sonner'
import AntdConfigProvider from '~/app/providers/AntdConfigProvider'
import { AuthProvider } from '~/app/providers/AuthProvider'
import ReactQueryProvider from '~/app/providers/ReactQueryProvider'
import { RouterProvider } from '~/app/providers/RouterProvider'

const App = () => {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <AntdConfigProvider>
          <Toaster expand={true} richColors position="top-center" closeButton duration={4000} />

          <RouterProvider />
        </AntdConfigProvider>
      </AuthProvider>
    </ReactQueryProvider>
  )
}

export default App
