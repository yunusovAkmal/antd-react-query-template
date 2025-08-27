export type PaginationOptions = {
  page: number
  size: number
}

export interface PaginationQuery {
  offset?: number
  limit?: number
}

export interface Pagination<T> {
  count: number
  results: T
}

export type QueryParam = string | null | undefined | number | boolean

export type WithId<T> = {
  data: T
  id: number | QueryParam
}

export type BaseError = {
  detail: string
}

export type BaseResponse<T = unknown> = {
  statusCode: number
  message: string
  timeStamp: string
  data: T
}
