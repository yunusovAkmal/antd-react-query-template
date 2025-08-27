import { Form, Switch } from 'antd'

import type { FormItemProps, SwitchProps } from 'antd'

interface SwitchFormItemProps extends Omit<FormItemProps, 'children'> {
  name: string
  label?: string
  switchProps?: SwitchProps
}

export function SwitchFormItem({ name, label, switchProps, ...rest }: SwitchFormItemProps) {
  return (
    <Form.Item label={label} name={name} valuePropName="checked" {...rest}>
      <Switch checkedChildren="Faol" unCheckedChildren="Faol emas" {...switchProps} />
    </Form.Item>
  )
}
