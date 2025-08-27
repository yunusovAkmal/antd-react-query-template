import { Button } from 'antd'
import { ArrowLeftIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

export const BackButton = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <Button color="red" variant="filled" onClick={() => navigate(-1)}>
      <ArrowLeftIcon size={18} />
      {t('action.back')}
    </Button>
  )
}
