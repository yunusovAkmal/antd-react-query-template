import { Button, type GetProp, Upload, type UploadProps } from 'antd'
import { UploadIcon } from 'lucide-react'

import { toast } from 'sonner'
import { customRequest } from './customRequest'
import { generateUploadFileList } from './helper'
import type { UploadFileList, UploadFileResponse } from './types'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const beforeUpload = (file: FileType, maxFileSizeInMB: number) => {
  const isValidSize = file.size <= maxFileSizeInMB * 1024 * 1024

  if (!isValidSize) {
    toast.error(`Max file size is ${maxFileSizeInMB}MB!`)

    return Upload.LIST_IGNORE
  }

  return true
}

const defaultContent = (
  <Button className="w-full" icon={<UploadIcon size={18} />} size="large" type="dashed">
    Yuklash
  </Button>
)

export interface FileInputProps extends Omit<UploadProps<UploadFileResponse>, 'fileList'> {
  maxFileSizeInMB: number
  fileList?: UploadFileList
}

export const FileInput = ({
  children,
  maxCount = 1,
  fileList,
  maxFileSizeInMB,
  ...props
}: FileInputProps) => {
  const files = generateUploadFileList(fileList)
  const isInputVisible = files.length < maxCount

  return (
    <Upload
      beforeUpload={(file) => beforeUpload(file, maxFileSizeInMB)}
      className="w-full"
      customRequest={customRequest}
      fileList={files}
      listType="picture"
      onPreview={() => {}}
      {...props}
    >
      {isInputVisible && (children || defaultContent)}
    </Upload>
  )
}

FileInput.displayName = 'FileInput'
