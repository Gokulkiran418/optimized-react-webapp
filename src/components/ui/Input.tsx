'use client'
import React, { useMemo } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    const inputClass = useMemo(
      () => `block w-full border rounded px-3 py-2 focus:outline-none focus:ring ${className}`,
      [className]
    )

    return <input ref={ref} {...props} className={inputClass} />
  }
)

InputComponent.displayName = 'Input'

export const Input = React.memo(InputComponent)
