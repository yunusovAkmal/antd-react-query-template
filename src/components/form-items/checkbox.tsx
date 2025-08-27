import { Checkbox, type CheckboxProps } from 'antd'
import FormItem, { type FormItemProps } from 'antd/es/form/FormItem'

export interface CheckboxFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: CheckboxProps
}

export function CheckboxFormItem<T = unknown>({
  label,
  required = false,
  rules = [],
  inputProps = {},
  ...props
}: CheckboxFormItemProps<T>) {
  return (
    <FormItem rules={[{ required }, ...rules]} valuePropName="checked" {...props}>
      <Checkbox {...inputProps}>{label}</Checkbox>
    </FormItem>
  )
}
