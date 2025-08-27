import { ServiceSlugEnum } from '~/types'

export default {
  // public Routes
  oneIdError: '/error', // one id error redirect url for error
  oneIdSuccess: '/welcome', // one id success redirect url for success
  notFound: '/not-found',
  login: '/auth/login',

  home: '/',
  admissionLyceum: `/${ServiceSlugEnum.ADMISSION_LYCEUM}`,
  admissionVocational: `/${ServiceSlugEnum.ADMISSION_VOCATIONAL_SCHOOL}`,
  admissionMaster: `/${ServiceSlugEnum.ADMISSION_MASTER}`,
  admissionInterview: `/${ServiceSlugEnum.ADMISSION_INTERVIEW}`,
  admissionSecondary: `/${ServiceSlugEnum.ADMISSION_SECONDARY}`,
  admissionTechnical: `/${ServiceSlugEnum.ADMISSION_TECHNICAL_SCHOOL}`

  // menu
} as const
