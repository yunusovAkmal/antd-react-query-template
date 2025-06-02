import { type FormItemProps, InputNumber, type InputNumberProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface NumberFormItemProps extends FormItemProps {
  inputProps?: InputNumberProps
}

export function NumberFormItem({
  required,
  rules = [],
  inputProps = {},
  ...props
}: NumberFormItemProps) {
  return (
    <FormItem rules={[{ type: 'number', required }, ...rules]} {...props}>
      <InputNumber controls={false} style={{ width: '100%' }} {...inputProps} />
    </FormItem>
  )
}

NumberFormItem.displayName = 'NumberFormItem'
