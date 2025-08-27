import type { BachelorDiploma } from '~/types/diploma'
import type { DiplomaStatusEnum } from '~/types/enum'
import type { Tm } from '~/types/Service'
import type { UserData } from '~/types/User'

export interface SecondaryDiploma {
  id: number
  rejected_reason: string
  avg_grade: string
  user_data: UserData
  bachelor_diploma_data: BachelorDiploma
  diploma_status: DiplomaStatusEnum
  checked_tm: Tm
  tm_data: Tm
}
