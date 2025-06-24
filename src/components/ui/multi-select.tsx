'use client'

import { useState, useRef, useEffect } from 'react'
import { Checkbox } from '@/components/ui/Checkbox'
import { ChevronDown } from 'lucide-react'

type MultiSelectProps = {
  options: string[]
  selected: string[]
  onChange: (val: string[]) => void
  placeholder?: string
}

const MultiSelect = ({ options, selected, onChange, placeholder = 'Select...' }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option))
    } else {
      onChange([...selected, option])
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full border px-3 py-2 rounded flex justify-between items-center dark:bg-zinc-900"
      >
        <span className="truncate text-left text-sm">
          {selected.length > 0 ? selected.join(', ') : placeholder}
        </span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-zinc-900 border rounded shadow-lg max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center px-3 py-2 hover:bg-muted cursor-pointer gap-2 text-sm"
            >
              <Checkbox
                checked={selected.includes(opt)}
                onCheckedChange={() => toggleOption(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default MultiSelect
