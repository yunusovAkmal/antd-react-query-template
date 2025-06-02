import { type FormItemProps, Input, type InputProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface TextFormItemProps extends FormItemProps {
  inputProps?: InputProps
}

export function TextFormItem({
  required,
  rules = [],
  inputProps = {},
  ...props
}: TextFormItemProps) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <Input allowClear {...inputProps} />
    </FormItem>
  )
}
TextFormItem.displayName = 'TextFormItem'
