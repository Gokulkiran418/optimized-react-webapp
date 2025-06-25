'use client'
import React, { useMemo } from 'react'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = React.memo(
  React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = '', ...props }, ref) => {
      const textareaClass = useMemo(
        () => `block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${className}`,
        [className]
      )

      return <textarea ref={ref} {...props} className={textareaClass} />
    }
  )
)

Textarea.displayName = 'Textarea'
