import { useForm, type FormInstance } from 'antd/es/form/Form'
import { useState } from 'react'

import { DEFAULT_PAGINATION } from '~/config'
import { usePagination, type usePaginationResponse } from '~/hooks/usePagination'

type Data = Record<string, unknown>

type Response<T extends object = Data> = usePaginationResponse & {
  filters: T
  onSearch: (data: T) => void
  onReset: () => void
  form: FormInstance<T>
  setCustomFilter: <Value = unknown>(name: string, value: Value) => void
  getFilterValue: <Value = string>(name: string) => Value | null
  query: T
}

export const useFilterForm = <T extends object = Data>(): Response<T> => {
  const [form] = useForm<T>()
  const { pagination, setPagination, query, searchParams, setSearchParams } = usePagination()

  const [filters, setFilters] = useState<T>(() => {
    const initialValues = parseQuery(searchParams)
    return initialValues as T
  })

  const onSearch = (data: T) => {
    const values = clearUndefinedValues<T>(data)

    setPagination(DEFAULT_PAGINATION)
    setFilters(values)
    setSearchParams({
      ...values,
      page: String(DEFAULT_PAGINATION.page),
      size: String(DEFAULT_PAGINATION.size)
    })
  }

  const onReset = () => {
    const emptyFilters = Object.keys(filters).reduce(
      (acc, key) => {
        acc[key] = undefined

        return acc
      },
      {} as Record<string, unknown>
    )
    form.setFieldsValue(emptyFilters as T)
    setPagination(DEFAULT_PAGINATION)
    setSearchParams({})
    setFilters({} as T)
  }

  const setCustomFilter = (name: string, value: unknown) => {
    setSearchParams((searchParams) => {
      if (value) {
        searchParams.set(name, String(value))
      } else {
        searchParams.delete(name)
      }
      return searchParams
    })
  }

  const getFilterValue = <V>(name: string) => {
    return searchParams.get(name) as V
  }

  return {
    filters,
    onSearch,
    onReset,
    pagination,
    setPagination,
    query: {
      ...filters,
      ...query
    },
    getFilterValue,
    form,
    setCustomFilter,
    searchParams,
    setSearchParams
  }
}

export function clearUndefinedValues<T extends object = Data>(obj: T): T {
  const values = Object.entries(obj).reduce(
    (acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = value
      }

      return acc
    },
    {} as Record<string, unknown>
  )

  return values as T
}

export const parseQuery = (query: URLSearchParams) => {
  return Object.entries(Object.fromEntries(query.entries())).reduce((acc, [key, value]) => {
    let parsedValue
    const isBoolean = value === 'true' || value === 'false'
    if (isBoolean) parsedValue = value === 'true'

    const isNumber = isNaN(parseFloat(value)) === false
    if (isNumber) parsedValue = parseFloat(value)

    if (!isBoolean && !isNumber) {
      parsedValue = value
    }

    acc[key] = parsedValue
    return acc
  }, {} as Data)
}
