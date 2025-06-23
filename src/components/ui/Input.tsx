'use client'
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      {...props}
      className={`block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${className}`}
    />
  )
)
Input.displayName = 'Input'
