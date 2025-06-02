import { type UploadFile } from 'antd'

export type UploadFileResponse = {
  filename: string
}

export type UploadedFileType = UploadFile<UploadFileResponse>

export type UploadFileList = string | UploadedFileType | string[] | UploadedFileType[] | null
