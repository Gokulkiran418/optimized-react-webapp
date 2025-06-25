'use client'
import React, { useMemo } from 'react'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextareaBase = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    const textareaClass = useMemo(
      () => `block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${className}`,
      [className]
    )

    return <textarea ref={ref} {...props} className={textareaClass} />
  }
)

TextareaBase.displayName = 'Textarea'

export const Textarea = React.memo(TextareaBase)
