import type { BaseError } from '~/types'

import { NotFoundCard } from '~/components/shared/not-found-card'

interface ErrorMessageProps {
  error?: BaseError | null
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return <NotFoundCard />

  return <p className="text-red-500">{error?.detail}</p>
}
