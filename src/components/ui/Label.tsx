'use client'
import React, { memo, useMemo } from 'react'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = memo(({ className = '', children, ...props }) => {
  const labelClass = useMemo(
    () => `block text-sm font-medium mb-1 ${className}`,
    [className]
  )

  return (
    <label {...props} className={labelClass}>
      {children}
    </label>
  )
})
