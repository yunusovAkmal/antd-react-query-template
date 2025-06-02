import type { AxiosResponse } from 'axios'
import { apiClient } from '~/api/http'
import { useMutation, useQuery, type MutationOptions, type QueryOptions } from '~/api/query'
import { errorHandler } from '~/lib/handler'
import type { WithId } from '~/types'

export type QueryGetOption<R> = Partial<QueryOptions<R>>

export function useGet<R, Q extends object = object>(
  path: string,
  params: Q = {} as Q,
  options?: QueryGetOption<AxiosResponse<R, R>['data']>
) {
  return useQuery({
    queryKey: [path, params],
    queryFn: () => apiClient.get<R>(path, { params }),
    ...options
  })
}

export function useCreate<R, B>(path: string, options: MutationOptions<B, R>) {
  const { mutate, isPending, mutateAsync } = useMutation({
    mutationFn: (data: B) => apiClient.post<R, B>(path, data),
    onError: errorHandler,
    ...options
  })

  return {
    create: mutate,
    createAsync: mutateAsync,
    isCreating: isPending
  }
}

export function useUpdate<R, B>(path: string, options: MutationOptions<WithId<B>, R>) {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ data, id }: WithId<B>) => apiClient.put<R, B>(`${path}/${id}`, data),
    onError: errorHandler,
    ...options
  })

  return {
    update: mutate,
    isUpdating: isPending
  }
}

export function useCustomUpdate<R, B>(path: string, options: MutationOptions<B, R>) {
  const { mutate, isPending } = useMutation({
    mutationFn: (data: B) => apiClient.put<R, B>(path, data),
    onError: errorHandler,
    ...options
  })

  return {
    update: mutate,
    isUpdating: isPending
  }
}

export function useDelete<R, B>(path: string, options: MutationOptions<B, R>) {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: B) => apiClient.delete<R>(`${path}/${id}`),
    onError: errorHandler,
    ...options
  })

  return {
    remove: mutate,
    isRemoving: isPending
  }
}
