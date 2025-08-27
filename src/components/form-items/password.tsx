import { type FormItemProps, Input, type InputProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useTranslation } from 'react-i18next'

export interface PasswordFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: InputProps
}

export function PasswordFormItem<T = unknown>({
  required = false,
  label,
  rules = [],
  inputProps = {},
  ...props
}: PasswordFormItemProps<T>) {
  const { t } = useTranslation()

  return (
    <FormItem label={label} rules={[{ required }, ...rules]} {...props}>
      <Input.Password placeholder={t('placeholder', { label })} {...inputProps} />
    </FormItem>
  )
}
