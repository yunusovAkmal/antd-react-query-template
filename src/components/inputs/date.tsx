import { DatePicker, type DatePickerProps } from 'antd'
import dayjs from 'dayjs'

const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY'
const SERVER_DATE_FORMAT = 'YYYY-MM-DD'

export type DateInputProps = {
  onChange?: (_value: string | string[]) => void
  value?: DatePickerProps['value']
  dateFormat?: string
  serverDateFormat?: string
  isISOFormat?: boolean
} & DatePickerProps

const dateFormatter = (
  value?: DateInputProps['value'],
  serverDateFormat?: DateInputProps['serverDateFormat']
) => {
  if (!value) return null

  const date = dayjs(value, serverDateFormat)

  return date.isValid() ? date : null
}

const getDateValue = ({
  value,
  serverDateFormat,
  isISOFormat
}: Pick<DateInputProps, 'value' | 'serverDateFormat' | 'isISOFormat'>) => {
  if (!value) return null

  if (isISOFormat) {
    return dayjs(value)
  }

  return dateFormatter(value, serverDateFormat)
}

export function DateInput({
  value,
  onChange,
  dateFormat = DEFAULT_DATE_FORMAT,
  serverDateFormat = SERVER_DATE_FORMAT,
  isISOFormat = false,
  ...props
}: DateInputProps) {
  return (
    <DatePicker
      allowClear
      format={{
        format: dateFormat,
        type: 'mask'
      }}
      placeholder={dateFormat}
      style={{ width: '100%' }}
      value={getDateValue({ value, serverDateFormat, isISOFormat })}
      onChange={(date: dayjs.Dayjs, dateString: string | string[]) =>
        onChange!(isISOFormat ? date.toISOString() : dateString)
      }
      {...props}
    />
  )
}
