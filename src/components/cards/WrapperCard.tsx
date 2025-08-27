interface Props {
  children: React.ReactNode
  title: string
  wrapperClassName?: string
  extra?: React.ReactNode
}

export const WrapperCard = ({ children, title, wrapperClassName, extra }: Props) => {
  return (
    <div className="dark:bg-dark-gray rounded-lg bg-white">
      <h1 className="flex items-center justify-between border-b border-b-gray-200 p-4 text-xl font-semibold dark:border-b-zinc-800 dark:text-zinc-400">
        {title}

        {extra}
      </h1>

      <div className={wrapperClassName}>{children}</div>
    </div>
  )
}
