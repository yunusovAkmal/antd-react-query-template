import type { ReactNode } from 'react'

import { cn } from '~/lib/utils'

type ListItem = {
  title: ReactNode
  value: ReactNode
  extraTitle?: ReactNode
  hidden?: boolean
}

export interface InfoListProps {
  list: ListItem[]
  loading?: boolean
  className?: string
  dotted?: boolean
  align?: 'start' | 'end'
}

export const InfoList = ({
  list,
  loading = false,
  dotted = false,
  className,
  align = 'start'
}: InfoListProps) => {
  if (loading) return <CardSkeleton />

  const filteredList = list.filter((item) => !item.hidden)

  return (
    <div className="py-4">
      <div className={className}>
        {dotted ? (
          <DottedInfoList align={align} list={filteredList} />
        ) : (
          <BaseInfoList align={align} list={filteredList} />
        )}
      </div>
    </div>
  )
}

const BaseInfoList = ({ list, align }: InfoListProps) => {
  return list.map(({ title, value, extraTitle }, index) => (
    <div
      key={index}
      className={cn('flex items-center justify-between gap-2 py-1', {
        'grid grid-cols-[380px_1fr] justify-baseline': align === 'start'
      })}
    >
      <div
        className={cn('dark:text-secondary text-lg text-zinc-500', {
          'flex items-center gap-1': !!extraTitle
        })}
      >
        <span className="whitespace-nowrap">{title}:</span> {extraTitle}
      </div>
      <span
        className={cn(
          'dark:text-secondary truncate text-end text-lg font-semibold whitespace-nowrap',
          {
            'text-start': align === 'start'
          }
        )}
      >
        {value}
      </span>
    </div>
  ))
}

const DottedInfoList = ({ list }: InfoListProps) => {
  return list.map(({ title, value }, index) => (
    <div key={index} className="grid grid-cols-[auto_1fr_auto] gap-1 py-1">
      <span className="dark:text-secondary text-gray-700">{title}</span>
      <span className="w-full overflow-hidden text-neutral-400">{dots}</span>
      <span className="text-end">{value}</span>
    </div>
  ))
}

const dots =
  '................................................................................................................................................................................................................................................................................................................................................................................'

const CardSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="h-5 animate-pulse rounded bg-gray-200" />
        <div className="h-5 animate-pulse rounded bg-gray-200" />
        <div className="h-5 animate-pulse rounded bg-gray-200" />
        <div className="h-5 animate-pulse rounded bg-gray-200" />
        <div className="h-5 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  )
}
