import { type UploadProps } from 'antd'

import type { AxiosRequestConfig } from 'axios'
import type { UploadFileResponse } from '~/components/form-items/upload/types'

import { apiClient } from '~/api'

export const uploadFile = (
  file: File,
  options: AxiosRequestConfig = {}
): Promise<UploadFileResponse> => {
  return apiClient.post<UploadFileResponse, { file: File }>(
    '/files/upload/',
    { file },
    {
      headers: { 'Content-Type': 'multipart/form-data' },
      ...options
    }
  )
}

export const customRequest: UploadProps['customRequest'] = ({
  file,
  onError,
  onProgress,
  onSuccess
}) => {
  uploadFile(file as File, {
    onUploadProgress: ({ total = 100, loaded }) => {
      onProgress!({ percent: Number(Math.round((loaded / total) * 100).toFixed(2)) }, file)
    }
  })
    .then((response) => {
      onSuccess!(response, file)
    })
    .catch(onError)
}
