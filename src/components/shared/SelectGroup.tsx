import { Radio, type RadioGroupProps } from 'antd'

import type { CheckboxOptionType } from 'antd/es/checkbox'

const allOption: CheckboxOptionType = {
  label: 'Barchasi',
  value: 'all'
}

interface Props<T = string> extends RadioGroupProps {
  value?: T | null
  includeAllOption?: boolean
  onValueChange: (value?: T | null) => void
  options: CheckboxOptionType[]
}

export function SelectGroup<T = string>({
  includeAllOption = false,
  defaultValue,
  onValueChange,
  options = [],
  ...props
}: Props<T>) {
  const items = includeAllOption ? [allOption, ...options] : options

  const onChange: RadioGroupProps['onChange'] = (event) => {
    const { value } = event.target
    onValueChange(value === 'all' ? null : value)
  }

  return (
    <Radio.Group
      block
      buttonStyle="solid"
      defaultValue={defaultValue ?? 'all'}
      optionType="button"
      onChange={onChange}
      {...props}
    >
      {items.map((item) => (
        <Radio.Button key={item.value} value={item.value}>
          <span className="whitespace-nowrap">{item.label}</span>
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}
