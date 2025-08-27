import { Empty } from 'antd'

import { cn } from '~/lib/utils'

interface NoExistProps {
  text?: string
  className?: string
}

export const NoExist = ({ text = 'Mavjud emas', className }: NoExistProps) => {
  return (
    <div className={cn('max-w-[720px] p-4', className)}>
      <Empty description={text} />
    </div>
  )
}
