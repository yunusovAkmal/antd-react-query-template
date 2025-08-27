import { type FormItemProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

import { DateInput, type DateInputProps } from '~/components/inputs'

export interface DateAndTimePickerFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: DateInputProps
}

export function DateAndTimePickerFormItem<T = unknown>({
  inputProps = {},
  rules = [],
  required,
  ...props
}: DateAndTimePickerFormItemProps<T>) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <DateInput
        isISOFormat
        dateFormat="DD.MM.YYYY HH:mm"
        showTime={{
          format: 'HH:mm'
        }}
        {...inputProps}
      />
    </FormItem>
  )
}
