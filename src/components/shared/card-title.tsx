import { cn } from '~/lib/utils'

interface CardTitleProps {
  title: string
  className?: string
}

export function CardTitle({ title, className }: CardTitleProps) {
  return <h1 className={cn('text-xl font-semibold', className)}>{title}</h1>
}
