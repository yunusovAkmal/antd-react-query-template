import { Image } from 'antd'
import { useTranslation } from 'react-i18next'

import type { UserPersonalInfo } from '~/types'

import { NotFoundCard } from '~/components/shared'
import { GENDER_TEXT } from '~/data'
import { cn, getFullName } from '~/lib/utils'

interface UserInfoCardProps {
  user?: UserPersonalInfo
  loading?: boolean
  className?: string
}

export const UserInfoCard = ({ user, loading = false, className }: UserInfoCardProps) => {
  const { t } = useTranslation()

  if (loading) return <UserInfoCardSkeleton />

  if (!user) return <NotFoundCard />

  const rows = [
    {
      title: t('label.genderAndBirthDate'),
      value: getGenderAndBirthDate(user)
    },
    {
      title: t('label.pinfl'),
      value: user.pinfl
    },
    {
      title: t('label.phone'),
      value: '+' + user.phone_number
    },
    {
      title: t('label.citizenship'),
      value: user.citizenship_data?.name_uz
    },
    {
      title: t('label.nationality'),
      value: user.nationality_data?.name_uz
    },
    {
      title: t('label.region'),
      value: user.region_data?.name_uz
    },
    {
      title: t('label.district'),
      value: user.district_data?.name_uz
    },
    {
      title: t('label.address'),
      value: user.address
    },
    {
      title: t('label.oldName'),
      value: user.old_name,
      hidden: !user.old_name
    }
  ]

  return (
    <div className={cn('grid grid-cols-[auto_1fr] gap-4 p-4', className)}>
      <div>
        <Image
          alt="user photo"
          className="rounded-lg border border-dashed object-cover"
          height={176}
          src={user.photo}
          width={136}
        />
      </div>

      <div>
        <div>
          <h1 className="font-bold">{getFullName(user)}</h1>
        </div>

        {rows.map(({ title, value, hidden }) => (
          <div
            key={title}
            className={cn(
              'dark:odd:bg-medium-gray flex items-center justify-between gap-2 p-2 odd:bg-zinc-200',
              {
                hidden
              }
            )}
          >
            <span className="dark:text-secondary text-gray-700">{title}:</span>
            <span className="text-end font-semibold dark:text-zinc-400">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const UserInfoCardSkeleton = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 p-4">
      <div className="h-44 w-32 animate-pulse rounded-lg bg-gray-200" />
      <div className="flex flex-col gap-2">
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  )
}

const getGenderAndBirthDate = (user: UserPersonalInfo) => {
  const age = new Date().getFullYear() - new Date(user.birth_date).getFullYear()
  return `${GENDER_TEXT[user.gender]}, ${age} yosh (${user.birth_date})`
}
