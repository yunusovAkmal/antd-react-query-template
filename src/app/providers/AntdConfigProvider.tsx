import { ConfigProvider, theme, type ThemeConfig } from 'antd'

import '@ant-design/v5-patch-for-react-19'
import { useThemeStore } from '~/app/store'

const validateMessages = {
  required: '${label}ni kiriting!'
}

export default function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const currentTheme = useThemeStore((state) => state.theme)

  const themeConfig: ThemeConfig = {
    token: {
      // colorPrimary: '#002e5d',
      fontFamily: 'Inter, sans-serif'
    },

    algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,

    components: {
      Modal: { borderRadiusLG: 24, borderRadius: 24, borderRadiusXS: 24, borderRadiusSM: 24 },
      Menu: {
        lineWidth: 0,
        subMenuItemBg: 'transparent',
        darkSubMenuItemBg: 'transparent',
        fontSize: 18,
        darkItemBg: 'transparent',
        itemColor: '#ffffff',
        itemSelectedColor: '#002e5d',
        itemSelectedBg: '#E6F4FF',
        itemBg: 'transparent',
        itemHoverColor: '#E6F4FF'
      },
      Tabs: {
        cardBg: 'red'
      }
    }
  }

  return (
    <ConfigProvider
      form={{
        validateMessages
      }}
      theme={themeConfig}
    >
      {children}
    </ConfigProvider>
  )
}
