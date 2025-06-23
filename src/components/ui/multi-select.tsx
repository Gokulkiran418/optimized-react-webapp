import { Checkbox } from '@/components/ui/Checkbox'

type MultiSelectProps = {
  options: string[]
  selected: string[]
  onChange: (val: string[]) => void
}

export const MultiSelect = ({ options, selected, onChange }: MultiSelectProps) => {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option))
    } else {
      onChange([...selected, option])
    }
  }

  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <Checkbox checked={selected.includes(opt)} onCheckedChange={() => toggle(opt)} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  )
}
