import { Table, type TableProps } from 'antd'

import type { AnyObject } from 'antd/es/_util/type'

import { TABLE_PAGINATION_CONFIG } from '~/config'

export function BaseTable<T extends AnyObject = AnyObject>(props: TableProps<T>) {
  return (
    <Table
      bordered
      pagination={TABLE_PAGINATION_CONFIG}
      rowKey="id"
      scroll={{ x: true }}
      size="small"
      {...props}
    />
  )
}
