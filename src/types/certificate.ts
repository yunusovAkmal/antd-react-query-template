import type {
  CefrClassifier,
  DisabilityTypeClassifier,
  ForeignLanguageClassifier
} from '~/types/Classifier'

export interface CefrCertificate {
  id: number
  user: number
  cefr_type: number
  foreign_language: number
  degree: string
  serial_number: string
  given_date: string
  expire_date: string
  file: string
  url: string
  status: number
  selected_for_lyceum: boolean
  selected_for_master: boolean
  cefr_type_data: CefrClassifier
  foreign_language_data: ForeignLanguageClassifier
  verified: boolean
}

export interface AchievementCertificate {
  id: number
  user: number
  achievement_type: number
  name: string
  serial_number: string
  given_date: string
  file: string
  url: string
  status: number
  achievement_type_data: unknown
}

export interface DisabilityCertificate {
  id: number
  user: number
  disability_type: number
  serial_number: string
  given_date: string
  file: string
  url: string
  status: number
  blind_school_certificate: string
  disability_type_data: DisabilityTypeClassifier
}

export interface NationalCertificate {
  id: number
  science_name: string
  serial_number: string
  ball: string
  given_date: string
  expire_date: string
  url: string
  file: string
}
