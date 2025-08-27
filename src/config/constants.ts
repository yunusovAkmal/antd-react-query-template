import type { TablePaginationConfig } from 'antd'
import type { PaginationOptions, PaginationQuery } from '~/types'

export const DEFAULT_PAGINATION: PaginationOptions = {
  page: 1,
  size: 10
}

export const TABLE_PAGINATION_CONFIG: TablePaginationConfig = {
  showSizeChanger: true,
  pageSizeOptions: [10, 15, 20],
  size: 'small',
  defaultPageSize: DEFAULT_PAGINATION.size,
  hideOnSinglePage: false,
  showTotal: (total: number) => `Jami: ${total} ta`
}

export const INFINITE_PAGINATION_QUERY: PaginationQuery = {
  offset: 0,
  limit: 10_000
}
