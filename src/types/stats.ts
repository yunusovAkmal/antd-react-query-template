import type { GenderEnum } from '~/types/enum'

export interface DateStats {
  date: string
  count: number
}

export interface GenderStats {
  gender: GenderEnum
  count: number
}
