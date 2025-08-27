import { Tabs, type TabsProps } from 'antd'

// import { useTheme } from '~/hooks'

export const CustomTabs = (props: TabsProps) => {
  // const { isLight } = useTheme()

  // const tabBarStyle = isLight
  //   ? {
  //       backgroundColor: 'white',
  //       padding: '0 12px',
  //       borderRadius: 12
  //     }
  //   : {
  //       backgroundColor: 'var(--color-dark-gray)',
  //       padding: '0 12px',
  //       borderRadius: 12,
  //       color: 'red'
  //     }

  return <Tabs {...props} />
}
