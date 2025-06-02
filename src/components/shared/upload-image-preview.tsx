import { Button } from '@heroui/button'
import { TrashIcon } from 'lucide-react'
import Image from 'next/image'

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

      <Button
        isIconOnly
        className="absolute right-2 top-2 border"
        color="danger"
        type="button"
        variant="solid"
        onPress={onRemove}
      >
        <TrashIcon />
      </Button>
    </div>
  )
}

export default UploadImagePreview
