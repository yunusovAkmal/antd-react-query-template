import { useSearchParams } from 'react-router'

export type QueryValue = string | number | boolean

export function useQuery() {
  const [searchParams, setSearchParams] = useSearchParams()

  const getParam = (key: string) => searchParams.get(key)

  const getParams = () => {
    return Object.fromEntries(searchParams)
  }

  const setParam = (key: string, value: QueryValue) => {
    setSearchParams((params) => {
      if (value) {
        params.set(key, String(value))
      } else {
        params.delete(key)
      }
      return params
    })
  }

  const setParams = (params: Record<string, QueryValue>) => {
    setSearchParams((searchParams) => {
      Object.entries(params).forEach(([key, value]) => searchParams.set(key, String(value)))
      return searchParams
    })
  }

  const removeParam = (key: string) => {
    setSearchParams((params) => {
      params.delete(key)
      return params
    })
  }

  const removeParams = (keys: string[]) => {
    setSearchParams((params) => {
      keys.forEach((key) => params.delete(key))
      return params
    })
  }

  const appendParam = (key: string, value: QueryValue) => {
    setSearchParams((params) => {
      params.append(key, String(value))
      return params
    })
  }

  const appendParams = (params: Record<string, QueryValue>) => {
    setSearchParams((searchParams) => {
      Object.entries(params).forEach(([key, value]) => searchParams.append(key, String(value)))
      return searchParams
    })
  }

  const clearParams = () => {
    setSearchParams({})
  }

  return {
    getParam,
    setParam,
    removeParam,
    clearParams,
    setParams,
    getParams,
    appendParam,
    appendParams,
    searchParams,
    setSearchParams,
    removeParams
  }
}
