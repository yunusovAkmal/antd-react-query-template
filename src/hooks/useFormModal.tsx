import { Form } from 'antd'
import { useState } from 'react'

import type { FormModalProps } from '~/components/modal'

type Response<T> = {
  onOpen: () => void
  modalProps: Pick<FormModalProps<T>, 'open' | 'form'> & { onCancel: () => void }
}

export function useFormModal<T>(): Response<T> {
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  const onCancel = () => {
    setOpen(false)
    form.resetFields()
  }

  const onOpen = () => {
    setOpen(true)
  }

  return { modalProps: { open, form, onCancel }, onOpen }
}
