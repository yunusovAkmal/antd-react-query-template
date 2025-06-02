import { Button } from '@heroui/button'
import { PaperclipIcon, Trash2Icon } from 'lucide-react'

export type UploadFileType = string | File

export interface UploadImagePreviewProps {
  file?: UploadFileType | null
  onRemove: () => void
}

const extractFileName = (file: UploadFileType) => {
  const isFileUrl = typeof file === 'string'

  if (isFileUrl) {
    return file.split('.').pop()
  }

  return file.name
}

export const UploadFilePreview = ({ file, onRemove }: UploadImagePreviewProps) => {
  if (!file) return null

  const fileName = extractFileName(file)

  return (
    <div className="flex items-center justify-between gap-2 overflow-hidden rounded-lg border bg-gray-100 px-4 py-2 shadow-md">
      <div className="flex items-center gap-2">
        <div>
          <PaperclipIcon size={24} />
        </div>
        <div>
          <p className="max-w-24 overflow-ellipsis">{fileName}</p>
        </div>
      </div>

      <Button
        isIconOnly
        className="border"
        color="danger"
        type="button"
        variant="solid"
        onPress={onRemove}
      >
        <Trash2Icon />
      </Button>
    </div>
  )
}

export default UploadFilePreview
