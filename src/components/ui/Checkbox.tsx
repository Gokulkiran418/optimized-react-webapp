'use client'
import React, { memo } from 'react'

interface CheckboxProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = memo(({ checked, onCheckedChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className="h-4 w-4 rounded border focus:ring"
  />
))
