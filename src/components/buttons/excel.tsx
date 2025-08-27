import { Button, type ButtonProps } from 'antd'
import { FileDownIcon } from 'lucide-react'

interface ExcelButtonProps extends ButtonProps {
  hidden?: boolean
}

export const ExcelButton = ({ hidden, ...props }: ExcelButtonProps) => {
  if (hidden) return null

  return (
    <Button color="green" variant="solid" {...props}>
      <FileDownIcon size={18} /> Excel
    </Button>
  )
}
