'use client'

import Link from 'next/link'
import { useTheme } from '@/context/theme-store'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 bg-white dark:bg-zinc-900 z-50">
      <Link href="/" className="text-xl font-semibold">
        Artistly
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link href="/artists">Artists</Link>
        <Link href="/onboard">Onboard</Link>
        <Link href="/dashboard">Dashboard</Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
