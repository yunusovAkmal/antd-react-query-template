import { type FormItemProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { DateInput, type DateInputProps } from '~/components/inputs'

export interface DatePickerFormItemProps extends FormItemProps {
  inputProps?: DateInputProps
}

export function DatePickerFormItem({
  inputProps = {},
  rules = [],
  required,
  ...props
}: DatePickerFormItemProps) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <DateInput {...inputProps} />
    </FormItem>
  )
}
