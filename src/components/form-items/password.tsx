import { type FormItemProps, Input, type InputProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface PasswordFormItemProps extends FormItemProps {
  inputProps?: InputProps
}

export function PasswordFormItem({
  required = false,
  rules = [],
  inputProps = {},
  ...props
}: PasswordFormItemProps) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <Input.Password {...inputProps} />
    </FormItem>
  )
}
