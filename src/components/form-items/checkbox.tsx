import { Checkbox } from 'antd'
import FormItem, { type FormItemProps } from 'antd/es/form/FormItem'

export interface CheckboxFormItemProps extends FormItemProps {}

export function CheckboxFormItem({
  label,
  required = false,
  rules = [],
  ...props
}: CheckboxFormItemProps) {
  return (
    <FormItem valuePropName="checked" rules={[{ required }, ...rules]} {...props}>
      <Checkbox>{label}</Checkbox>
    </FormItem>
  )
}

CheckboxFormItem.displayName = 'CheckboxFormItem'
