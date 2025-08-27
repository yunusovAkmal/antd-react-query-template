import type { QueryParam } from '~/types/IRequest'

export interface MasterStatsQuery {
  education_language_id: QueryParam
  speciality_id?: QueryParam
  tm_id?: QueryParam
}

export interface MasterStats {
  region_name: string
  tm_name: string
  speciality_code: string
  speciality_name: string
  education_form_name: string
  education_language_name: string
  new_application: number
  accepted_application: number
  rejected_application: number
  grant_quota: number
  contract_quota: number
}
