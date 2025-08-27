import { Button, Form, type FormInstance, Modal, type ModalProps } from 'antd'
import { useTranslation } from 'react-i18next'

interface Props<T> extends ModalProps {
  isUpdate: boolean
  onSubmit: (data: T) => void
  form: FormInstance
  loading: boolean
}

export function CrudModal<T = unknown>({
  children,
  isUpdate = false,
  onCancel,
  onSubmit,
  form,
  loading,
  ...props
}: Props<T>) {
  const { t } = useTranslation()

  return (
    <Modal
      centered
      footer={null}
      title={isUpdate ? t('action.edit') : t('action.add')}
      onCancel={onCancel}
      {...props}
    >
      <div
        style={{
          paddingTop: 20
        }}
      >
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <div style={{ paddingBottom: 40 }}>{children}</div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
            <Button danger onClick={onCancel}>
              {t('action.cancel')}
            </Button>
            <Button htmlType="submit" loading={loading} type="primary">
              {t('action.save')}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}
