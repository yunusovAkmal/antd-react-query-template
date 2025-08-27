import type { ReactNode } from 'react'

interface TableContainerProps {
  title?: ReactNode
  extra?: ReactNode
  children?: ReactNode
  padding?: string
  count?: number
}

export const TableContainer = ({
  extra,
  children,
  title,
  count,
  padding = 'p-4'
}: TableContainerProps) => {
  return (
    <div className={`dark:bg-dark-gray bg-white ${padding} rounded-xl`}>
      <div className="mb-2 flex min-h-10 flex-wrap items-center justify-between gap-4">
        <h3 className="text-xl dark:text-white">
          {count ? (
            <span>
              {title} soni: <span className="font-semibold">{count.toLocaleString()} ta</span>
            </span>
          ) : (
            title
          )}
        </h3>

        <div className="flex items-center gap-2">{extra}</div>
      </div>

      {children}
    </div>
  )
}
