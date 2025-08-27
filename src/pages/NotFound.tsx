import { Button } from 'antd'
import { ArrowLeft, HomeIcon } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="to-university-blue-50 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white p-4">
      <div className="w-full max-w-md">
        <div className="blue-card-shadow card-hover space-y-6 rounded-2xl bg-white p-8 text-center">
          <div className="relative mb-4 inline-block">
            <div className="bg-university-primary/10 animate-pulse-soft absolute inset-0 transform rounded-full blur-xl"></div>
            <div className="bg-university-secondary mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold text-white">
              404
            </div>
          </div>

          <h1 className="text-university-secondary-700 text-3xl font-bold">Sahifa topilmadi</h1>

          <p className="mb-6 text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex justify-center gap-2">
            <Button
              className="flex items-center justify-center gap-2"
              onClick={() => window.history.back()}
            >
              <p className="flex items-center justify-center gap-2">
                <ArrowLeft size={16} />
                Orqaga
              </p>
            </Button>

            <Button onClick={() => (window.location.href = '/')}>
              <p className="flex items-center justify-center gap-2">
                <HomeIcon size={16} />
                Bosh sahifa
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
