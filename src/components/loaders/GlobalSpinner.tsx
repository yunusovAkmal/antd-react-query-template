import { Loader } from '~/components/loaders/Loader'

export function GlobalSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <Loader />
      </div>
    </div>
  )
}
