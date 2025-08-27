import { useCallback } from 'react'
import { useSearchParams, type SetURLSearchParams } from 'react-router'

import type { PaginationOptions, PaginationQuery } from '~/types'

import { DEFAULT_PAGINATION } from '~/config'

export type usePaginationResponse = {
  searchParams: URLSearchParams
  setSearchParams: SetURLSearchParams
  pagination: PaginationOptions
  setPagination: (pagination: PaginationOptions) => void
  query: PaginationQuery
}

export function usePagination(): usePaginationResponse {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageParam = searchParams.get('page')
  const sizeParam = searchParams.get('size')

  const page = pageParam ? Number(pageParam) : DEFAULT_PAGINATION.page
  const size = sizeParam ? Number(sizeParam) : DEFAULT_PAGINATION.size

  const setPagination = useCallback(
    (pagination: PaginationOptions) => {
      setSearchParams((params) => {
        params.set('page', String(pagination.page))
        params.set('size', String(pagination.size))
        return params
      })
    },
    [setSearchParams]
  )

  return {
    pagination: { page, size },
    query: { limit: size, offset: (page - 1) * size },
    setPagination,
    searchParams,
    setSearchParams
  }
}
