import { useSearchParams } from 'react-router'

type QueryValue = string | number | boolean | undefined | null

type QueryParams = Record<string, QueryValue>

type UseQueryParamsResponse<T extends QueryParams> = {
  params: T
  getParam: (key: keyof T) => T[keyof T]
  getParams: () => Partial<T>
  // setParam: (key: keyof T, value: T[keyof T]) => void
  // setParams: (params: Partial<T>) => void
  // removeParam: (key: keyof T) => void
  // removeParams: (keys: (keyof T)[]) => void
  // appendParam: (key: keyof T, value: T[keyof T]) => void
  // appendParams: (params: T) => void
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useQueryParams<T extends QueryParams>(initialParams: T): UseQueryParamsResponse<T> {
  const [searchParams] = useSearchParams()

  const getParam = (key: keyof T): T[keyof T] => {
    const value = searchParams.get(key as string)
    const parsedValue = parseQueryValue(value)

    return parsedValue as T[keyof T]
  }

  const getParams = (): Partial<T> => {
    const values = Object.fromEntries(searchParams)

    return formatValues(values) as Partial<T>
  }

  return {
    getParam,
    getParams,
    params: initialParams
  }
}

function parseQueryValue(value: string | null): QueryValue {
  if (!value) return null

  const isNull = value === 'null'
  if (isNull) return null

  const isUndefined = value === 'undefined'
  if (isUndefined) return undefined

  const isBoolean = value === 'true' || value === 'false'
  if (isBoolean) return value === 'true'

  const isNumber = isNaN(parseFloat(value)) === false
  if (isNumber) return parseFloat(value)

  return value
}

// function formatQueryValue(value: QueryValue): string {
//   if (value === null) return 'null'
//   if (value === undefined) return 'undefined'

//   return String(value)
// }

function formatValues<T extends QueryParams>(values: T): QueryParams {
  return Object.entries(values).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null) {
      acc[key] = value
    }

    return acc
  }, {} as QueryParams)
}
