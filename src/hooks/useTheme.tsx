import { useThemeStore } from '~/app/store'

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  const isLight = theme === 'light'
  const isDark = theme === 'dark'

  return {
    theme,
    toggleTheme,
    isLight,
    isDark
  }
}
