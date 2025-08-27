import { AxiosError } from 'axios'
import { toast } from 'sonner'

import type { BaseError } from '~/types'

export const errorHandler = (error: AxiosError<BaseError>): void => {
  toast.error(error?.response?.data.detail || "Tizimda xatolik, qayta urinib ko'ring")
}
