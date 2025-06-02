import type { UploadedFileType, UploadFileList } from './types'

const extractFileNameFromUrl = (url: string): string => {
  const urlParts = url.split('/')

  const fileName = urlParts[urlParts.length - 1]

  return fileName
}

const extractFileTypeFromUrl = (url: string): string => {
  const urlParts = url.split('.')
  const fileType = urlParts[urlParts.length - 1]

  return fileType
}

export const generateUploadFileFromUrl = (url: string): UploadedFileType => {
  const fileName = extractFileNameFromUrl(url)
  const fileType = extractFileTypeFromUrl(url)

  return {
    uid: url,
    name: fileName,
    status: 'done',
    url,
    thumbUrl: url,
    preview: url,
    type: fileType,
    response: {
      filename: url
    },
    fileName
  }
}

export const generateUploadFileList = (fileList?: UploadFileList): UploadedFileType[] => {
  if (!fileList) return []

  if (!Array.isArray(fileList)) {
    if (typeof fileList === 'string') {
      return [generateUploadFileFromUrl(fileList)]
    }

    return [fileList]
  }

  return fileList.map((file) => {
    if (typeof file === 'string') {
      return generateUploadFileFromUrl(file)
    }

    return file
  })
}
