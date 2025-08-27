import { PatternFormat } from 'react-number-format'
import { Input, type FormItemProps, type InputProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

const CustomInput = (props: InputProps) => {
  return <Input placeholder="+998 (__) ___ __ __" {...props} />
}

const PatternInput = (props: Omit<InputProps, 'type' | 'value' | 'defaultValue'>) => {
  return (
    <PatternFormat<InputProps>
      customInput={CustomInput}
      format="+998 (##) ### ## ##"
      mask="_"
      type="tel"
      {...props}
    />
  )
}

export interface PhoneFormItemProps extends FormItemProps {
  inputProps?: InputProps
}

export function PhoneFormItem({
  required = false,
  rules = [],
  inputProps = {},
  ...props
}: PhoneFormItemProps) {
  return (
    <FormItem rules={[{ required }, ...rules]} {...props}>
      <PatternInput {...inputProps} />
    </FormItem>
  )
}
