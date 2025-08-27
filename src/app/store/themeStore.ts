import { create } from 'zustand'

import { storageService } from '~/api/services/storage'

type ThemeStore = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const getInitialTheme = () => {
  const storedTheme = storageService.getTheme()
  return storedTheme || 'light'
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: getInitialTheme(),
  toggleTheme: () => {
    const currentTheme = get().theme

    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    storageService.setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    set({ theme: newTheme })
  }
}))
