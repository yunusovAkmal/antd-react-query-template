import { Button, Form, type FormProps } from 'antd'

import { cn } from '~/lib/utils'

interface Props<T = unknown> extends FormProps<T> {
  className?: string
  onSearch: (data: T) => void
  onReset: () => void
  children: React.ReactNode
}

export function FilterForm<T = unknown>({
  className,
  onSearch,
  onReset,
  children,
  ...props
}: Props<T>) {
  return (
    <Form onFinish={onSearch} onReset={onReset} {...props}>
      <div className={cn('flex w-full flex-wrap gap-2 py-4', className)}>
        {children}

        <Button htmlType="submit" type="primary">
          Qidirish
        </Button>
        <Button danger htmlType="reset">
          Tozalash
        </Button>
      </div>
    </Form>
  )
}
