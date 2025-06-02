import { type FormItemProps, InputNumber, type InputNumberProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface PriceFormItemProps extends FormItemProps {
  inputProps?: InputNumberProps
}

const formatter: InputNumberProps['formatter'] = (value) =>
  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const parser: InputNumberProps['parser'] = (value) =>
  value?.replace(/\$\s?|(,*)/g, '') as unknown as number

export function PriceFormItem({
  required = false,
  rules = [],
  inputProps = {},
  ...props
}: PriceFormItemProps) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <InputNumber
        controls={false}
        style={{ width: '100%' }}
        {...inputProps}
        formatter={formatter}
        parser={parser}
      />
    </FormItem>
  )
}

PriceFormItem.displayName = 'PriceFormItem'
