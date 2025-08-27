import type {
  EducationFormClassifier,
  EduLanguageClassifier,
  RegionClassifier,
  SpecialtyClassifier
} from '~/types/Classifier'
import type { Tm } from '~/types/Service'
import type { UserData } from '~/types/User'

export interface VocationalApplication {
  id: number
  user: number
  service: number
  tm: number
  speciality: number
  education_language: number
  education_form: number
  is_joint: boolean
  status: number
  rejected_reason: string
  created_at: string
  updated_at: string
  tm_data: Tm
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  education_form_data: EducationFormClassifier
  region_data: RegionClassifier
  user_data: UserData
}
