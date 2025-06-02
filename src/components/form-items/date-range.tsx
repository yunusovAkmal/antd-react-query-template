import { DatePicker, type FormItemProps } from 'antd'
import { type RangePickerProps } from 'antd/es/date-picker'
import FormItem from 'antd/es/form/FormItem'
import dayjs, { Dayjs } from 'dayjs'

const { RangePicker } = DatePicker

export interface DateRangePickerFormItemProps extends FormItemProps {
  inputProps?: RangePickerProps
}

const DATE_FORMAT = 'YYYY-MM-DD'

export function DateRangePickerFormItem({
  required,
  rules = [],
  inputProps = {},
  ...props
}: DateRangePickerFormItemProps) {
  return (
    <FormItem
      getValueFromEvent={(date?: Dayjs[] | null) => {
        if (!date) return null

        return date.map((d) => d.toISOString())
      }}
      rules={[{ required }, ...rules]}
      {...props}
    >
      <CustomDateRangePicker
        allowClear
        format={{
          format: DATE_FORMAT,
          type: 'mask'
        }}
        placeholder={[DATE_FORMAT, DATE_FORMAT]}
        size="large"
        {...inputProps}
      />
    </FormItem>
  )
}

const dateFormatter = (date: RangePickerProps['value']): RangePickerProps['value'] | null => {
  if (!date) return null
  if (!Array.isArray(date)) return null

  const [start, end] = date

  if (!start || !end) return null

  return [dayjs(start), dayjs(end)]
}

function CustomDateRangePicker({ value, ...props }: RangePickerProps) {
  return <RangePicker value={dateFormatter(value)} {...props} />
}
