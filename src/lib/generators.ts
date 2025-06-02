import { type UploadFile } from 'antd'

type UploadFileType = { url: string; fileName: string }

export type GeneratedFileType = UploadFile<UploadFileType>

export const generateFile = (url: string): GeneratedFileType => {
  return {
    uid: url,
    name: url,
    status: 'done',
    url,
    thumbUrl: url,
    response: { url, fileName: url }
  }
}

type FileListType = string | string[] | GeneratedFileType[]

export const generateFileList = (fileList?: FileListType): GeneratedFileType[] => {
  if (!fileList) return []

  if (typeof fileList === 'string') {
    return [generateFile(fileList)]
  }

  if (typeof fileList === 'object' && Array.isArray(fileList)) {
    return fileList.map((file) => {
      if (typeof file === 'string') {
        return generateFile(file)
      }

      return file
    })
  }

  return fileList
}

export function extractFileFromValue(value?: string | GeneratedFileType[]) {
  if (!value) return ''

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value?.[0]?.response?.url as string
  }

  return ''
}
