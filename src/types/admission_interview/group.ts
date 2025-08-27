import type {
  EduLanguageClassifier,
  InterviewAddress,
  InterviewPhoneNumber,
  RegionClassifier,
  SpecialtyClassifier,
  Tm
} from '~/types'

import { InterviewGroupStatusEnum } from '../enum'

export interface InterviewGroup {
  id: number
  tm: number
  speciality: number
  education_language: number
  status: InterviewGroupStatusEnum
  name: string
  interview_time?: string
  address: number
  phone_number: number
  result_file?: string
  tm_data: Tm
  region_data: RegionClassifier
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  address_data?: InterviewAddress
  phone_number_data?: InterviewPhoneNumber
  number_of_groups: number
}

export interface InterviewGroupDto {
  interview_time: string
  address: number
  phone_number: number
  result_file: File
}

export interface InterviewGroupGenerateDto {
  speciality_id: number
  education_language_id: number
  number_of_groups: number
}
