import { ConfigProvider, type ThemeConfig } from 'antd'

const validateMessages = {
  required: 'Iltimos, ${label}ni kiriting!'
}

const theme: ThemeConfig = {
  token: {
    colorPrimary: 'var(--color-primary)'
  },
  components: {
    Modal: { borderRadiusLG: 24, borderRadius: 24, borderRadiusXS: 24, borderRadiusSM: 24 }
  }
}

export default function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      form={{
        validateMessages
      }}
      theme={theme}
    >
      {children}
    </ConfigProvider>
  )
}
