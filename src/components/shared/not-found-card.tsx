import { cn } from '~/lib/utils'

interface NotFoundCardProps {
  text?: string
  className?: string
}

export const NotFoundCard = ({ text = "Ma'lumotlar topilmadi", className }: NotFoundCardProps) => {
  return (
    <div className={cn('p-2', className)}>
      <div className="flex min-h-40 w-full items-center justify-center rounded-lg border border-dashed">
        <p className="text-xl text-gray-500"> {text}</p>
      </div>
    </div>
  )
}
