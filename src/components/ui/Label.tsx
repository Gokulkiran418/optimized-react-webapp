'use client'
import React from 'react'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = ({ className, children, ...props }) => (
  <label {...props} className={`block text-sm font-medium mb-1 ${className}`}>
    {children}
  </label>
)
