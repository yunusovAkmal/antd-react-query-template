import { type FormItemProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'

import { FileInput, type FileInputProps } from '~/components/form-items/upload/file-input'

export interface MultipleFileUploadFormItemProps extends FormItemProps {
  inputProps?: Partial<FileInputProps>
  maxFileSizeInMB: FileInputProps['maxFileSizeInMB']
  maxCount: FileInputProps['maxCount']
  accept: FileInputProps['accept']
}

export function MultipleFileUploadFormItem({
  required = false,
  accept,
  maxCount,
  rules = [],
  inputProps = {},
  maxFileSizeInMB,
  ...props
}: MultipleFileUploadFormItemProps) {
  return (
    <FormItem
      getValueFromEvent={({ fileList }) => fileList}
      rules={[{ required }, ...rules]}
      valuePropName="fileList"
      {...props}
    >
      <FileInput
        multiple
        accept={accept}
        maxCount={maxCount}
        maxFileSizeInMB={maxFileSizeInMB}
        {...inputProps}
      />
    </FormItem>
  )
}

MultipleFileUploadFormItem.displayName = 'MultipleFileUploadFormItem'
