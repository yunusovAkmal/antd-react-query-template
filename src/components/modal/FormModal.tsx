import {
  Button,
  Form,
  Modal,
  type ButtonProps,
  type FormInstance,
  type FormProps,
  type ModalProps
} from 'antd'
import { useTranslation } from 'react-i18next'

export interface FormModalProps<T> extends ModalProps {
  form: FormInstance
  formProps?: FormProps<T>
  onSubmit: (values: T) => void
  submitText?: string
  cancelText?: string
  submitButtonProps?: ButtonProps
}

export function FormModal<T>({
  children,
  form,
  formProps = {},
  onSubmit,
  submitText,
  cancelText,
  submitButtonProps = {},
  ...props
}: FormModalProps<T>) {
  const { t } = useTranslation()

  return (
    <Modal footer={null} {...props}>
      <div className="pt-4">
        <Form<T> form={form} layout="vertical" onFinish={onSubmit} {...formProps}>
          {children}

          <div className="mt-12 flex justify-end gap-4">
            <Button onClick={props.onCancel}>{cancelText || t('action.cancel')}</Button>

            <Button htmlType="submit" type="primary" {...submitButtonProps}>
              {submitText || t('action.save')}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}
