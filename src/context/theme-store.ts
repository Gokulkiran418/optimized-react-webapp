'use client'

import { useEffect, memo } from 'react'
import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setTheme: (theme) => set({ theme }),
}))

const ThemeProviderComponent = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return children
}

ThemeProviderComponent.displayName = 'ThemeProvider'

export const ThemeProvider = memo(ThemeProviderComponent)
export const useTheme = () => useThemeStore()
