import { Button, Popconfirm, type ButtonProps } from 'antd'
import { useTranslation } from 'react-i18next'

interface Props extends ButtonProps {
  children?: React.ReactNode
  onClick: () => void
  title: string
}

export function ConfirmButton({ children, onClick, title, ...props }: Props) {
  const { t } = useTranslation()

  return (
    <div>
      <Popconfirm
        cancelText={t('action.no')}
        okText={t('action.yes')}
        title={title}
        onConfirm={onClick}
      >
        <Button {...props}>{children}</Button>
      </Popconfirm>
    </div>
  )
}
