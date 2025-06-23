'use client'
import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
  <button
    {...props}
    className={clsx(
      'inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition',
      'bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring',
      className
    )}
  />
)
