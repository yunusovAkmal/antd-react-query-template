import type { InterviewNotParticipatedStatusEnum, Tm, UserData } from '~/types'

export interface InterviewNotParticipated {
  id: number
  application: number
  status: InterviewNotParticipatedStatusEnum
  reason: string
  response: string
  number_of_commission_members: number
  total_ball: number
  average_ball: number
  user_data: UserData
  tm_data: Tm
  created_at: string
  reason_file: string
  result_file?: string
  interview_time?: string
}
