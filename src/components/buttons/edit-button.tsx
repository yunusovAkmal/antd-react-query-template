import { Button, type ButtonProps } from 'antd'
import { PencilIcon } from 'lucide-react'

interface Props extends ButtonProps {
  children?: React.ReactNode
}

export function EditButton({ children, ...props }: Props) {
  return (
    <Button type="text" {...props}>
      {children || <PencilIcon size={20} />}
    </Button>
  )
}
