import type {
  EducationFormClassifier,
  EduLanguageClassifier,
  SpecialtyClassifier
} from '~/types/Classifier'

export interface SecondaryMessage {
  id: number
  speciality: number
  education_language: number
  education_form: number
  is_active: boolean
  is_sent: boolean
  exam_time: string
  message: string
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  education_form_data: EducationFormClassifier
}

export interface SecondaryMessageDto {
  speciality: number
  education_language: number
  education_form: number
  is_active: boolean
  exam_time: string
  message: string
}
