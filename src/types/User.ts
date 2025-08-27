import type { DistrictClassifier, RegionClassifier } from '~/types/Classifier'
import type { GenderEnum } from '~/types/enum'

export interface User {
  id: number
  pinfl: string
  document: string
  full_name: string
  lang: string
  phone_number: string
  email: string
}

export interface UserData {
  id: number
  pinfl: string
  document: string
  birth_date: string
  first_name: string
  last_name: string
  middle_name: string
  first_name_en: string
  last_name_en: string
  photo: string
  gender: number
  lang: string
  phone_number: string
  email: string
  citizenship: number
  nationality: number
  district: number
  region: number
  address: string
}

export interface UserPersonalInfo {
  id: number
  pinfl: string
  document: string
  birth_date: string
  first_name: string
  last_name: string
  middle_name: string
  first_name_en: string
  last_name_en: string
  photo: string
  gender: GenderEnum
  lang: string
  phone_number: string
  email: string
  address: string
  old_name?: string
  citizenship_data: CitizenshipData
  nationality_data: NationalityData
  region_data: RegionClassifier
  district_data?: DistrictClassifier
}

export interface CitizenshipData {
  id: number
  code: string
  name_uz: string
  name_en: string
  name_ru: string
}

export interface NationalityData {
  id: number
  code: string
  name_uz: string
  name_en: string
  name_ru: string
}
