import { Button, Popconfirm, type ButtonProps } from 'antd'
import { TrashIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Props extends ButtonProps {
  children?: React.ReactNode
  onClick: () => void
}

export function DeleteButton({ children, onClick, ...props }: Props) {
  const { t } = useTranslation()

  return (
    <div>
      <Popconfirm
        cancelText={t('action.no')}
        okText={t('action.yes')}
        title={t('confirm.delete')}
        onConfirm={onClick}
      >
        <Button danger type="text" {...props}>
          {children || <TrashIcon size={20} />}
        </Button>
      </Popconfirm>
    </div>
  )
}
