import { Button, Image } from 'antd'
import { TrashIcon } from 'lucide-react'

export type UploadFileType = string | File

export interface UploadImagePreviewProps {
  file?: UploadFileType | null
  onRemove: () => void
}

export const UploadImagePreview = ({ file, onRemove }: UploadImagePreviewProps) => {
  if (!file) return null

  const isImageUrl = typeof file === 'string'

  const imageUrl = isImageUrl ? file : URL.createObjectURL(file)

  return (
    <div className="relative aspect-square size-48 overflow-hidden rounded-lg border bg-gray-100 shadow-md">
      <Image
        alt={file.toString()}
        className="size-full object-contain"
        height={192}
        src={imageUrl}
        width={192}
        onLoad={() => {
          // Revoke the data URI after the image has loaded to save memory
          // Only for newly uploaded files with previews
          if (!isImageUrl) {
            URL.revokeObjectURL(imageUrl)
          }
        }}
      />

      <Button danger className="absolute top-2 right-2 border" onClick={onRemove}>
        <TrashIcon />
      </Button>
    </div>
  )
}

export default UploadImagePreview
