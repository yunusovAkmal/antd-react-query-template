import type { InterviewAppealStatusEnum } from '~/types/enum'

export interface InterviewApplicationAppeal {
  id: number
  application: number
  content: string
  response: string
  status: InterviewAppealStatusEnum
  ball: number
  file: string
  created_at: string
}
