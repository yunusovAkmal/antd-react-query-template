import { Moon, Sun } from 'lucide-react'

import { useThemeStore } from '~/app/store'
import { cn } from '~/lib'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeStore()

  const isLight = theme === 'light'
  const isDark = theme === 'dark'

  return (
    <button
      aria-label="Toggle theme"
      className={cn(
        'relative flex h-[44px] w-[90px] cursor-pointer items-center justify-between rounded-xl p-[4px] transition-all duration-300 hover:shadow-md',
        {
          'bg-medium-gray': isDark,
          'bg-gray-100': isLight
        }
      )}
      onClick={toggleTheme}
    >
      {/* Background slider */}
      <div
        className={cn('absolute size-[38px] rounded-xl', {
          'bg-white': isLight,
          'bg-dark-gray translate-x-[44px]': isDark
        })}
      />

      {/* Sun icon */}
      <Sun
        className={cn('ml-[6px] size-[26px] transition-all duration-300', {
          'scale-100 text-yellow-500 opacity-100': isLight,
          'scale-75 text-white opacity-50': isDark
        })}
      />

      {/* Moon icon */}
      <Moon
        className={cn('mr-[6px] size-[26px] transition-all duration-300', {
          'scale-100 fill-blue-400 text-blue-400 opacity-100': isDark,
          'scale-75 text-gray-400 opacity-50': isLight
        })}
      />
    </button>
  )
}
