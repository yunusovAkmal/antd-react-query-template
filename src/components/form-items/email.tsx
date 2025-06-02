import { type FormItemProps, Input, type InputProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface EmailFormItemProps extends FormItemProps {
  inputProps?: InputProps
}

export function EmailFormItem({
  required,
  rules = [],
  inputProps = {},
  ...props
}: EmailFormItemProps) {
  return (
    <FormItem rules={[{ type: 'email', required }, ...rules]} {...props}>
      <Input allowClear {...inputProps} />
    </FormItem>
  )
}

EmailFormItem.displayName = 'EmailFormItem'
