import { type FormItemProps, Radio, type RadioGroupProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface RadioFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: RadioGroupProps
  options?: RadioGroupProps['options']
}

export function RadioFormItem<T = unknown>({
  required = false,
  rules = [],
  inputProps = {},
  options,
  ...props
}: RadioFormItemProps<T>) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <Radio.Group options={options} {...inputProps} />
    </FormItem>
  )
}
