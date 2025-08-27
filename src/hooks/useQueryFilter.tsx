import { useForm } from 'antd/es/form/Form'

import type { FormInstance } from 'antd'
import type { QueryParam } from '~/types'

import { useQuery, type QueryValue } from './useQuery'

type ParamsData = Record<string, QueryParam>

type useQueryFilterResponse<T extends ParamsData = ParamsData> = {
  filters: T
  form: FormInstance<T>
  onFilter: (data: T) => void
  onReset: () => void
}

export function UseQueryFilter<T extends ParamsData = ParamsData>(): useQueryFilterResponse<T> {
  const { setParams, getParams, clearParams } = useQuery()
  const [form] = useForm<T>()

  const filters = parseQueryParams<T>(getParams())

  const onFilter = (data: T) => {
    const values = formatValues<T>(data)
    setParams(values)
    form.setFieldsValue(values as object)
  }

  const onReset = () => {
    form.resetFields()
    clearParams()
  }

  return {
    filters,
    form,
    onFilter,
    onReset
  }
}

// clear undefined or null values
function formatValues<T extends ParamsData>(values: T): Record<string, QueryValue> {
  return Object.entries(values).reduce(
    (acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = value
      }

      return acc
    },
    {} as Record<string, QueryValue>
  )
}

function parseQueryParams<T extends ParamsData>(query: Record<string, string>): T {
  const values = Object.entries(query).reduce((acc, [key, value]) => {
    const parsedValue: QueryParam = parseQueryValue(value)

    acc[key] = parsedValue

    return acc
  }, {} as ParamsData)

  return values as T
}

const parseQueryValue = (value: string): QueryParam => {
  const isBoolean = value === 'true' || value === 'false'
  if (isBoolean) return value === 'true'

  const isNumber = isNaN(parseFloat(value)) === false
  if (isNumber) return parseFloat(value)

  const isNull = value === 'null'
  if (isNull) return null

  const isUndefined = value === 'undefined'
  if (isUndefined) return undefined

  return value
}
