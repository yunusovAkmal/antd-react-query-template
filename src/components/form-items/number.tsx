import { type FormItemProps, InputNumber, type InputNumberProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useTranslation } from 'react-i18next'

export interface NumberFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: InputNumberProps
}

export function NumberFormItem<T = unknown>({
  required,
  rules = [],
  inputProps = {},
  label,
  ...props
}: NumberFormItemProps<T>) {
  const { t } = useTranslation()

  return (
    <FormItem label={label} rules={[{ type: 'number', required }, ...rules]} {...props}>
      <InputNumber
        controls={false}
        placeholder={t('placeholder', { label })}
        style={{ width: '100%' }}
        {...inputProps}
      />
    </FormItem>
  )
}
