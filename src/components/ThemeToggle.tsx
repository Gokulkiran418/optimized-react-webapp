'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/theme-store'
import { memo } from 'react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-accent transition-colors"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

ThemeToggle.displayName = 'ThemeToggle'

export default memo(ThemeToggle)
