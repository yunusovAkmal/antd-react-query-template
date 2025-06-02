import { type FormItemProps, Select, type SelectProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

export interface SelectFormItemProps extends FormItemProps {
  inputProps?: SelectProps
  options?: SelectProps['options']
}

export function SelectFormItem({
  required,
  rules = [],
  inputProps = {},
  options,
  ...props
}: SelectFormItemProps) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <Select allowClear filterOption showSearch {...inputProps} options={options} />
    </FormItem>
  )
}
