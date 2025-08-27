import { useTranslation } from 'react-i18next'

import { cn } from '~/lib/utils'

export function StatusText({ status }: { status: boolean }) {
  const { t } = useTranslation()
  return (
    <span className={cn(status ? 'text-green-500' : 'text-red-500')}>
      {status ? t('statusText.active') : t('statusText.inactive')}
    </span>
  )
}
