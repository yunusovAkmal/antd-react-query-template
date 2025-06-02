import { DatePicker, type DatePickerProps } from 'antd'
import dayjs from 'dayjs'

const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY'
const SERVER_DATE_FORMAT = 'YYYY-MM-DD'

export type DateInputProps = {
  onChange?: (_value: string | string[]) => void
  value?: DatePickerProps['value']
  dateFormat?: string
  serverDateFormat?: string
} & DatePickerProps

const dateFormatter = (
  value?: DateInputProps['value'],
  serverDateFormat?: DateInputProps['serverDateFormat']
) => {
  if (!value) return null

  const date = dayjs(value, serverDateFormat)

  return date.isValid() ? date : null
}

export function DateInput({
  value,
  onChange,
  dateFormat = DEFAULT_DATE_FORMAT,
  serverDateFormat = SERVER_DATE_FORMAT,
  ...props
}: DateInputProps) {
  return (
    <DatePicker
      allowClear
      style={{ width: '100%' }}
      format={{
        format: dateFormat,
        type: 'mask'
      }}
      placeholder={dateFormat}
      value={dateFormatter(value, dateFormat)}
      onChange={(_date: dayjs.Dayjs, dateString: string | string[]) => onChange!(dateString)}
      {...props}
    />
  )
}
