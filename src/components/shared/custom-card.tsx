import { cn } from '~/lib'

export const CustomCard = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('dark:bg-dark-gray rounded-xl bg-white p-4 dark:text-white', className)}>
      {children}
    </div>
  )
}
