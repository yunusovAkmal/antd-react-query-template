import type { QueryParam } from '~/types/IRequest'

export interface LyceumStatsQuery {
  education_language_id: QueryParam
  tm_id?: QueryParam
}

export interface LyceumStats {
  speciality_code: string
  speciality_name: string
  total_quota: number
  total_application: number
  new_application: number
  rejected_application: number
}
