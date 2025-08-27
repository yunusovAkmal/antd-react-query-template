import { useMemo } from 'react'

import type { TablePaginationConfig, TableProps } from 'antd'
import type { AnyObject } from 'antd/es/_util/type'
import type { TableRowSelection } from 'antd/es/table/interface'
import type { PaginationOptions } from '~/types'

import { BaseTable } from '~/components/table/BaseTable'
import { TABLE_PAGINATION_CONFIG } from '~/config'

interface PaginationTableProps<T extends AnyObject = AnyObject>
  extends Omit<TableProps<T>, 'pagination'> {
  pagination: PaginationOptions
  total?: number
  setPagination: (pagination: PaginationOptions) => void
}

export function PaginationTable<T extends AnyObject = AnyObject>({
  pagination,
  total,
  setPagination,
  ...rest
}: PaginationTableProps<T>) {
  const rowSelection: TableRowSelection<T> = {
    columnTitle: '№',
    renderCell: (_, __, index) => {
      return <span>{index + 1 + (pagination.page - 1) * pagination.size}</span>
    }
  }

  const tablePagination: TablePaginationConfig = useMemo(() => {
    return Object.assign(
      {
        onChange: (page: number, size: number) => {
          setPagination({ page, size })
        },
        total,
        pageSize: pagination.size,
        current: pagination.page
      },
      TABLE_PAGINATION_CONFIG
    )
  }, [total, pagination.size, pagination.page, setPagination])

  return <BaseTable pagination={tablePagination} rowSelection={rowSelection} {...rest} />
}
