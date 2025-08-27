import type { EducationFormClassifier, SpecialtyClassifier, TmClassifier } from '~/types/Classifier'

export interface AttestationDiploma {
  id: number
  serial_number: string
  cert_type: string
  graduate_year: number
  class_level: number
  average_grade_last_six_year: string
  country_name: string
  region_name: string
  district_name: string
  school_name: string
}

export interface ProfDiploma {
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

export interface BachelorDiploma {
  id: number
  user: number
  serial_number: string
  status: number
  is_foreign: boolean
  is_preferential: boolean
  university: number
  speciality: number
  education_form: number
  graduated_year: number
  diploma_file: string
  supplement_file: string
  hemis_verified: boolean
  hemis_avg_grade: string
  d_archive_verified: boolean
  university_data: TmClassifier
  speciality_data: SpecialtyClassifier
  education_form_data: EducationFormClassifier
}

export interface LyceumDiploma {
  id: number
  serial_number: string
  graduated_year: number
  lyceum_name: string
  direction_name: string
  status: number
  emis_verified: boolean
  diploma_file: string
  supplement_file: string
  certificate_file: string
}
