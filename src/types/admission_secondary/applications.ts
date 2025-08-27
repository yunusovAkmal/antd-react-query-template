import type {
  EducationFormClassifier,
  EduLanguageClassifier,
  SpecialtyClassifier
} from '~/types/Classifier'
import type { BachelorDiploma } from '~/types/diploma'
import type { SecondaryApplicationStatusEnum } from '~/types/enum'
import type { Tm } from '~/types/Service'
import type { UserData } from '~/types/User'

export interface SecondaryApplication {
  id: number
  user: number
  service: number
  tm: number
  speciality: number
  education_language: number
  education_form: number
  status: SecondaryApplicationStatusEnum
  rejected_reason: string
  created_at: string
  updated_at: string
  tm_data: Tm
  checked_tm: Tm
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  education_form_data: EducationFormClassifier
  user_data: UserData
  bachelor_diploma_data: BachelorDiploma
}
