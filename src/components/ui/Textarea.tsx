'use client'
import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      {...props}
      className={`block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${className}`}
    />
  )
)
Textarea.displayName = 'Textarea'
