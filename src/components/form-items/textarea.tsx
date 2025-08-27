import { type FormItemProps, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useTranslation } from 'react-i18next'

import type { TextAreaProps } from 'antd/es/input'

export interface TextareaFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: TextAreaProps
}

export function TextareaFormItem<T = unknown>({
  required,
  rules = [],
  inputProps = {},
  label,
  ...props
}: TextareaFormItemProps<T>) {
  const { t } = useTranslation()

  return (
    <FormItem label={label} rules={[{ required }, ...rules]} {...props}>
      <Input.TextArea
        allowClear
        placeholder={t('placeholder', { label })}
        rows={4}
        {...inputProps}
      />
    </FormItem>
  )
}
