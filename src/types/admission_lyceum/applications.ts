import type {
  AchievementCertificate,
  CefrCertificate,
  NationalCertificate
} from '~/types/certificate'
import type {
  EduLanguageClassifier,
  ForeignLanguageClassifier,
  RegionClassifier,
  SpecialtyClassifier
} from '~/types/Classifier'
import type { LyceumApplicationStatusEnum, LyceumSelectionStatusEnum } from '~/types/enum'
import type { Tm } from '~/types/Service'
import type { UserData } from '~/types/User'

export interface LyceumApplication {
  id: number
  user: number
  service: number
  speciality: number
  education_language: number
  foreign_language: number
  region: number
  status: LyceumApplicationStatusEnum
  selection_status: LyceumSelectionStatusEnum
  dtm_exam_url?: string
  dtm_result_url: string
  created_at: string
  updated_at: string
  lyceum_selections: LyceumSelection[]
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  foreign_language_data: ForeignLanguageClassifier
  region_data: RegionClassifier
  user_data: UserData
  cefr_certificate: number
  achievement_certificate: number
  national_certificate: number
  cefr_certificate_data: CefrCertificate
  achievement_certificate_data: AchievementCertificate
  national_certificate_data: NationalCertificate
}

export interface LyceumSelection {
  id: number
  tm: number
  sequence: number
  status: LyceumSelectionStatusEnum
  rejected_reason: string
  tm_data: Tm
}
