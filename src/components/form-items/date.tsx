import { type FormItemProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

import { DateInput, type DateInputProps } from '~/components/inputs'

export interface DatePickerFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: DateInputProps
}

export function DatePickerFormItem<T = unknown>({
  inputProps = {},
  rules = [],
  required,
  ...props
}: DatePickerFormItemProps<T>) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <DateInput {...inputProps} />
    </FormItem>
  )
}
