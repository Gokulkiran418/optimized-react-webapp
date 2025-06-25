'use client'
import React, { memo, useMemo } from 'react'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const LabelComponent: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  const labelClass = useMemo(
    () => `block text-sm font-medium mb-1 ${className}`,
    [className]
  )

  return (
    <label {...props} className={labelClass}>
      {children}
    </label>
  )
}

LabelComponent.displayName = 'Label'

export const Label = memo(LabelComponent)
