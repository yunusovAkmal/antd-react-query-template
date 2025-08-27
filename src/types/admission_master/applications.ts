import type {
  AchievementCertificate,
  CefrCertificate,
  DisabilityCertificate
} from '~/types/certificate'
import type {
  EducationFormClassifier,
  EduLanguageClassifier,
  SpecialtyClassifier
} from '~/types/Classifier'
import type { BachelorDiploma } from '~/types/diploma'
import type {
  CertificateTypeEnum,
  MasterApplicationStatusEnum,
  MasterResultStatusEnum
} from '~/types/enum'
import type { Tm } from '~/types/Service'
import type { UserData } from '~/types/User'

export interface MasterApplication {
  id: number
  user: number
  service: number
  tm: number
  speciality: number
  education_language: number
  education_form: number
  is_targeted: boolean
  status: MasterApplicationStatusEnum
  result_status: MasterResultStatusEnum
  rejected_reason: string
  avg_grade: string
  certificate_type: CertificateTypeEnum
  created_at: string
  updated_at: string
  tm_data: Tm
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  education_form_data: EducationFormClassifier
  user_data: UserData
  bachelor_diploma_data: BachelorDiploma
  cefr_certificate_data: CefrCertificate
  achievement_certificate_data: AchievementCertificate
  disability_certificate_data: DisabilityCertificate
  checked_tm: Tm
  from_my_gov: boolean
}

export interface MasterApplicationLog {
  flag: boolean
  created_at: string
  title: string
  reason: string
  admin: string
}
