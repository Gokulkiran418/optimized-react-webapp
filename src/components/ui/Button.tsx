'use client'
import React, { memo, useMemo } from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = memo(({ className, ...props }) => {
  const buttonClasses = useMemo(
    () =>
      clsx(
        'inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition',
        'bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring',
        className
      ),
    [className]
  )

  return <button {...props} className={buttonClasses} />
})
