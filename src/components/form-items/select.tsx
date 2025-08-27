import { type FormItemProps, Select, type SelectProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useTranslation } from 'react-i18next'

export interface SelectFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: SelectProps
  options?: SelectProps['options']
}

export function SelectFormItem<T = unknown>({
  required,
  rules = [],
  inputProps = {},
  options,
  label,
  ...props
}: SelectFormItemProps<T>) {
  const { t } = useTranslation()

  return (
    <FormItem label={label} rules={[{ required }, ...rules]} {...props}>
      <Select
        allowClear
        showSearch
        optionFilterProp="label"
        options={options}
        placeholder={t('selectPlaceholder', { label })}
        {...inputProps}
      />
    </FormItem>
  )
}
