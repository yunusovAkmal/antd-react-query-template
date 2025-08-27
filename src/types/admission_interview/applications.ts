import type { InterviewApplicationAppeal } from '~/types/admission_interview/appeal'
import type { InterviewGroup } from '~/types/admission_interview/group'
import type { InterviewNotParticipated } from '~/types/admission_interview/notParticipated'
import type {
  EducationFormClassifier,
  EduLanguageClassifier,
  RegionClassifier,
  SpecialtyClassifier
} from '~/types/Classifier'
import type { Tm } from '~/types/Service'
import type { UserData } from '~/types/User'

export interface InterviewApplication {
  id: number
  user: number
  service: number
  tm: number
  speciality: number
  education_language: number
  education_form: number
  group: number
  number_of_commission_members: number
  total_ball: number
  average_ball: number
  additional_ball: number
  created_at: string
  updated_at: string
  tm_data: Tm
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  education_form_data: EducationFormClassifier
  prof_diploma_data?: ProfDiploma
  group_data?: InterviewGroup
  user_data: UserData
  region_data: RegionClassifier
  appeal_data?: InterviewApplicationAppeal
  not_participated_data?: InterviewNotParticipated
}

interface ProfDiploma {
  id: number
  link: string
  serial_number: string
  tm_uz: string
  tm_en: string
  direction_uz: string
  direction_en: string
  classifier_code: string
  classifier_uz: string
  classifier_en: string
  education_form_uz: string
  education_form_en: string
  given_date: string
  graduated_year: number
  degree: number
  ownership_form: number
  qr_link: string
}

export interface InterviewSemesterGrade {
  id: number
  semester: number
  subject: string
  grade: number
  hours: number
}
