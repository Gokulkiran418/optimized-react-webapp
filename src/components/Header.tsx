'use client'

import { memo, useMemo } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const navItems = useMemo(
    () => [
      { href: '/artists', label: 'Artists' },
      { href: '/onboard', label: 'Onboard' },
      { href: '/dashboard', label: 'Dashboard' },
    ],
    []
  )

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 bg-white dark:bg-zinc-900 z-50">
      {/* Logo with hover underline */}
      <Link href="/" className="relative text-xl font-semibold group">
        Artistly
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </Link>

      {/* Nav links with same effect */}
      <nav className="flex items-center gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative group transition"
          >
            {item.label}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default memo(Header)
