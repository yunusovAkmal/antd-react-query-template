import { type FormItemProps, Input, type InputProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useTranslation } from 'react-i18next'

export interface TextFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: InputProps
}

export function TextFormItem<T = unknown>({
  required,
  rules = [],
  inputProps = {},
  label,
  ...props
}: TextFormItemProps<T>) {
  const { t } = useTranslation()

  return (
    <FormItem label={label} rules={[{ required }, ...rules]} {...props}>
      <Input allowClear placeholder={t('placeholder', { label })} {...inputProps} />
    </FormItem>
  )
}
