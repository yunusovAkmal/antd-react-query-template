import type { ServiceDegreeEnum, TmOrganizationalTypeEnum, TmOwnershipFormEnum } from '~/types/enum'

type BaseClassifier = {
  id: number
  code: string
  name_uz: string
  name_en: string
  name_ru: string
}

export type EduLanguageClassifier = BaseClassifier

export type EducationFormClassifier = BaseClassifier

export type ForeignLanguageClassifier = BaseClassifier

export type RegionClassifier = BaseClassifier
export type CefrTypeClassifier = BaseClassifier & {
  for_lyceum: boolean
  for_master: boolean
}

export type DisabilityTypeClassifier = BaseClassifier

export type CefrClassifier = BaseClassifier

export type SpecialtyClassifier = BaseClassifier & {
  degree: ServiceDegreeEnum
  is_archived: boolean
}

export type DistrictClassifier = BaseClassifier & {
  region_id: number
}

export type TmClassifier = BaseClassifier & {
  organizational_type: TmOrganizationalTypeEnum
  ownership_form: TmOwnershipFormEnum
  ministry_id: number
  region_id: number
  district_id: number
}
