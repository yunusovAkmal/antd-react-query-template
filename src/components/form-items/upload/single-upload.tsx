import { Form, type FormItemProps } from 'antd'

import { FileInput, type FileInputProps } from '~/components/form-items/upload/file-input'

export interface SingleFileUploadFormItemProps<T = unknown> extends FormItemProps<T> {
  inputProps?: Partial<FileInputProps>
  maxFileSizeInMB: FileInputProps['maxFileSizeInMB']
  accept: FileInputProps['accept']
}

export function SingleFileUploadFormItem<T = unknown>({
  required = false,
  accept,
  rules = [],
  inputProps = {},
  maxFileSizeInMB,
  ...props
}: SingleFileUploadFormItemProps<T>) {
  return (
    <Form.Item
      getValueFromEvent={({ fileList }) => fileList}
      rules={[{ required }, ...rules]}
      valuePropName="fileList"
      {...props}
    >
      <FileInput
        accept={accept}
        maxCount={1}
        maxFileSizeInMB={maxFileSizeInMB}
        multiple={false}
        {...inputProps}
      />
    </Form.Item>
  )
}
