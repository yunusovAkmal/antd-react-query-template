import { type FormItemProps, Radio, type RadioGroupProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface RadioFormItemProps extends FormItemProps {
  inputProps?: RadioGroupProps
  options?: RadioGroupProps['options']
}

export function RadioFormItem({
  required = false,
  rules = [],
  inputProps = {},
  options,
  ...props
}: RadioFormItemProps) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <Radio.Group options={options} {...inputProps} />
    </FormItem>
  )
}

RadioFormItem.displayName = 'RadioFormItem'
