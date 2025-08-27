import type { QueryParam } from '~/types/IRequest'

export interface InterviewStatsQuery {
  tm_id?: QueryParam
}

export interface InterviewStats {
  tm_name: string
  total_count: number
  grouped_count: number
  sent_info_count: number
  sent_result_count: number
}
