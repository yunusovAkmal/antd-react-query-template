import type {
  AttestationDiploma,
  BachelorDiploma,
  DiplomaTypeEnum,
  EducationFormClassifier,
  EduLanguageClassifier,
  LyceumDiploma,
  ProfDiploma,
  RegionClassifier,
  SpecialtyClassifier,
  TechnicalApplicationStatusEnum,
  TechnicalGroup,
  Tm,
  UserData
} from '~/types'

export interface TechnicalApplication {
  id: number
  group: number
  number_of_commission_members: number
  total_ball: number
  average_ball: number
  additional_ball: number
  created_at: string
  tm_data: Tm
  speciality_data: SpecialtyClassifier
  education_language_data: EduLanguageClassifier
  education_form_data: EducationFormClassifier
  user_data: UserData
  region_data: RegionClassifier
  status: TechnicalApplicationStatusEnum
  rejected_reason: string
  diploma_type: DiplomaTypeEnum
  is_joint: boolean
  result_file_url?: string
  user: number
  group_data: TechnicalGroup
  bachelor_diploma_data?: BachelorDiploma
  prof_diploma_data?: ProfDiploma
  school_diploma_data?: AttestationDiploma
  lyceum_diploma_data?: LyceumDiploma
}
