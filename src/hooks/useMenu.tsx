import {
  ChartColumnIcon,
  FileIcon,
  MapPin,
  MessageCircleIcon,
  PhoneIcon,
  TableOfContentsIcon,
  UsersIcon
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useAdminRole, useAdminRolePart } from '~/hooks'
import { ServiceSlugEnum } from '~/types'

type MenuType = {
  icon: React.ReactNode
  label: string
  key: string
  hidden?: boolean
}

export const useMenu = (slug: ServiceSlugEnum): MenuType[] => {
  const { t } = useTranslation()
  const { isTmAdmin } = useAdminRole()
  const { isDiplomaChecker } = useAdminRolePart()

  const menu: Record<ServiceSlugEnum, MenuType[]> = {
    [ServiceSlugEnum.ADMISSION_LYCEUM]: [
      {
        key: 'stats',
        label: 'Statistika',
        icon: <ChartColumnIcon size={22} />
      },
      {
        key: 'applications',
        label: t('menu.applications'),
        icon: <TableOfContentsIcon size={22} />
      }
    ],
    [ServiceSlugEnum.ADMISSION_VOCATIONAL_SCHOOL]: [
      {
        key: 'stats',
        label: 'Statistika',
        icon: <ChartColumnIcon size={22} />
      },
      {
        key: 'applications',
        label: t('menu.applications'),
        icon: <TableOfContentsIcon size={22} />
      }
    ],
    [ServiceSlugEnum.ADMISSION_INTERVIEW]: [
      {
        key: 'stats',
        label: 'Statistika',
        icon: <ChartColumnIcon size={22} />
      },
      {
        key: 'applications',
        label: t('menu.applications'),
        icon: <TableOfContentsIcon size={22} />
      },
      {
        key: 'groups',
        label: 'Guruhlar',
        icon: <UsersIcon size={22} />
      },
      {
        key: 'phone-number',
        label: 'Telefon raqamlar',
        icon: <PhoneIcon size={22} />,
        hidden: !isTmAdmin
      },
      {
        key: 'address',
        label: 'Manzillar',
        icon: <MapPin size={22} />,
        hidden: !isTmAdmin
      },
      {
        key: 'appeals',
        label: 'Apellyatsiyalar',
        icon: <FileIcon size={22} />
      },
      {
        key: 'not-participated',
        label: 'Qayta suhbat',
        icon: <MessageCircleIcon size={22} />
      }
    ],
    [ServiceSlugEnum.ADMISSION_MASTER]: [
      {
        key: 'stats',
        label: 'Statistika',
        icon: <ChartColumnIcon size={22} />
      },
      {
        key: 'applications',
        label: t('menu.applications'),
        icon: <TableOfContentsIcon size={22} />,
        hidden: isDiplomaChecker
      },
      {
        key: 'diplomas',
        label: t('menu.diplomas'),
        icon: <TableOfContentsIcon size={22} />
      }
    ],
    [ServiceSlugEnum.ADMISSION_COLLEGE]: [],
    [ServiceSlugEnum.ADMISSION_TECHNICAL_SCHOOL]: [
      {
        key: 'stats',
        label: 'Statistika',
        icon: <ChartColumnIcon size={22} />
      },
      {
        key: 'applications',
        label: t('menu.applications'),
        icon: <TableOfContentsIcon size={22} />
      },
      {
        key: 'groups',
        label: 'Guruhlar',
        icon: <UsersIcon size={22} />
      },
      {
        key: 'phone-number',
        label: 'Telefon raqamlar',
        icon: <PhoneIcon size={22} />,
        hidden: !isTmAdmin
      },
      {
        key: 'address',
        label: 'Manzillar',
        icon: <MapPin size={22} />,
        hidden: !isTmAdmin
      }
    ],
    [ServiceSlugEnum.ADMISSION_SECONDARY]: [
      {
        key: 'stats',
        label: 'Statistika',
        icon: <ChartColumnIcon size={22} />
      },
      {
        key: 'applications',
        label: t('menu.applications'),
        icon: <TableOfContentsIcon size={22} />,
        hidden: isDiplomaChecker
      },
      {
        key: 'diplomas',
        label: t('menu.diplomas'),
        icon: <TableOfContentsIcon size={22} />
      },
      {
        key: 'messages',
        label: t('menu.messages'),
        icon: <MessageCircleIcon size={22} />
      }
    ],
    [ServiceSlugEnum.ADMISSION_TRANSFER]: [],
    [ServiceSlugEnum.ADMISSION_SCHOLARSHIP]: [],
    [ServiceSlugEnum.HIGHER_STUDY_CERTIFICATE]: [],
    [ServiceSlugEnum.HIGHER_EDUCATION_SHEET]: [],
    [ServiceSlugEnum.HIGHER_QR_DIPLOMA]: [],
    [ServiceSlugEnum.HIGHER_RATING_BOOK]: [],
    [ServiceSlugEnum.PROF_STUDY_CERTIFICATE]: [],
    [ServiceSlugEnum.ACADEMIC_DEGREE_CERTIFICATE]: [],
    [ServiceSlugEnum.HIGHER_DIPLOMA_ADDING_OR_EDITING]: [],
    [ServiceSlugEnum.PROF_DIPLOMA_ADDING_OR_EDITING]: [],
    [ServiceSlugEnum.CONFIRM_CEFR]: [],
    [ServiceSlugEnum.DORMITORY]: [],
    [ServiceSlugEnum.RE_READING_APPLICATION]: [],
    [ServiceSlugEnum.ADMISSION_TECHNICAL_COLLEGE]: []
  }

  return menu[slug]
}
