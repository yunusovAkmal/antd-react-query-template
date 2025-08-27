import { Skeleton } from 'antd'

import { NoExist } from '~/components/shared/no-exist'

interface FileReaderProps {
  fileUrl?: string
  loading?: boolean
}

export const FileReader = ({ fileUrl, loading }: FileReaderProps) => {
  if (loading) return <Skeleton />

  if (!fileUrl) {
    return <NoExist />
  }

  return (
    <div>
      <iframe height="1000px" src={fileUrl} width="100%" />
    </div>
  )
}
