import type {
  AdminRoleEnum,
  AdminRolePartEnum,
  RegionClassifier,
  ServiceCategoryEnum,
  ServiceDegreeEnum,
  ServiceSlugEnum,
  ServiceStatusEnum,
  TmOrganizationalTypeEnum,
  TmOwnershipFormEnum,
  User
} from '~/types'

export interface AdminService {
  id: number
  service: Service
  tm: Tm
  admin: User
  region: RegionClassifier
  ministry: Ministry
  role: AdminRoleEnum
  role_part: AdminRolePartEnum
}

export interface Service {
  id: number
  name_uz: string
  name_en: string
  name_ru: string
  slug: ServiceSlugEnum
  degree: ServiceDegreeEnum
  priority: number
  status: ServiceStatusEnum
  description_uz: string
  description_ru: string
  description_en: string
  svg: string
  svg_for_hot: string
  svg_for_inactive: string
  category: ServiceCategoryEnum
  is_hot: boolean
  is_active: boolean
  start_at: string
  end_at: string
  availability_start_at: string
  availability_end_at: string
  edit_until_at: string
}

export interface Tm {
  id: number
  code: string
  name_uz: string
  name_en: string
  name_ru: string
  organizational_type: TmOrganizationalTypeEnum
  ownership_form: TmOwnershipFormEnum
  ministry: number
  region: number
  district: number
}

export interface Ministry {
  id: number
  code: string
  name_uz: string
  name_en: string
  name_ru: string
}
