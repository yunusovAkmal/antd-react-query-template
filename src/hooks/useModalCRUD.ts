import { useState } from 'react'

import { FormInstance, useForm } from 'antd/es/form/Form'

type ModalMode = 'create' | 'update'

type ModalCRUDBaseResourceType = { id: number } & object

type ModalCRUDInputsType<Resource> = { [key in keyof Omit<Resource, 'id'>]: unknown }

type BaseResponse<Resource> = {
  isOpen: boolean
  showModal: () => void
  closeModal: () => void
  onCreate: () => void
  onUpdate: (data: Resource) => void
  form: FormInstance<ModalCRUDInputsType<Resource>>
}

type CreateResponse<Resource> = {
  updateId: null
  mode: 'create'
} & BaseResponse<Resource>

type UpdateResponse<Resource> = {
  updateId: number
  mode: 'update'
} & BaseResponse<Resource>

export type ModalCRUDResponseType<Resource> = CreateResponse<Resource> | UpdateResponse<Resource>

export function useModalCRUD<
  Resource extends ModalCRUDBaseResourceType
>(): ModalCRUDResponseType<Resource> {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<ModalMode>('create')
  const [formId, setFormId] = useState<number | null>(null)
  const [form] = useForm<ModalCRUDInputsType<Resource>>()

  const showModal = () => setOpen(true)
  const closeModal = () => {
    setOpen(false)
    form.resetFields()
    setFormId(null)
  }

  const onCreate = () => {
    setMode('create')
    showModal()
  }

  const onUpdate = (data: Resource) => {
    form.setFieldsValue(data)
    setMode('update')
    showModal()
    setFormId(data.id)
  }

  return mode === 'create'
    ? {
        mode,
        updateId: null,
        isOpen: open,
        showModal,
        closeModal,
        onCreate,
        onUpdate,
        form
      }
    : {
        mode,
        updateId: formId!,
        isOpen: open,
        showModal,
        closeModal,
        onCreate,
        onUpdate,
        form
      }
}
