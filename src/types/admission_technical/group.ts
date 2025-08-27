import type {
  EducationFormClassifier,
  EduLanguageClassifier,
  SpecialtyClassifier,
  TechnicalAddress,
  TechnicalGroupStatusEnum,
  TechnicalPhoneNumber,
  Tm
} from '~/types'

export interface TechnicalGroup {
  id: number
  status: TechnicalGroupStatusEnum
  name: string
  address: number
  phone_number: number
  tm_data: Tm
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  address_data?: TechnicalAddress
  phone_number_data?: TechnicalPhoneNumber
  is_joint: boolean
  exam_time: string
  education_form_data: EducationFormClassifier
  application_count: number
  result_file?: string
}

export interface TechnicalGroupDto {
  exam_time: string
  address: number
  phone_number: number
  result_file: File
}

export interface TechnicalGroupGenerateDto {
  speciality_id: number
  education_language_id: number
  education_form_id: number
  number_of_groups: number
  is_joint: boolean
}
