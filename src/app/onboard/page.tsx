'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { artistSchema, ArtistFormData } from '@/lib/schema/artistSchema'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'
import { Checkbox } from '@/components/ui/Checkbox'
import MultiSelect from '@/components/ui/multi-select'
import type { ArtistFormData as FormData } from '@/lib/schema/artistSchema'

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker']
const languages = ['English', 'Hindi', 'Tamil', 'Punjabi']
const feeRanges = ['10000 - 15000', '15000 - 20000', '> 20000']

export default function OnboardingPage() {
  const [showModal, setShowModal] = useState(false)
  const [artistName, setArtistName] = useState('')
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(artistSchema),
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      languages: [],
      fee: 0,
      location: '',
      image: undefined,
    },
  })

  const [imageUrl, setImageUrl] = useState<string>('')

  const onSubmit = (data: FormData) => {
  console.log('Submitted artist data:', data)
  setArtistName(data.name)
  setShowModal(true)
  reset()
  setImageUrl('')
}

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setImageUrl(URL.createObjectURL(file))
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Artist Onboarding</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register('name')} placeholder="Artist Name" />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" {...register('bio')} placeholder="Brief bio" />
          {errors.bio && <p className="text-sm text-red-500">{errors.bio.message}</p>}
        </div>

        {/* Category Dropdown Multi-Select */}
        <div>
          <Label>Category</Label>
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <MultiSelect
                options={categories}
                selected={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.category && (
            <p className="text-sm text-red-500">Select at least one category</p>
          )}
        </div>

        {/* Languages Checkboxes */}
        <div>
          <Label>Languages</Label>
          <Controller
            control={control}
            name="languages"
            render={({ field }) => (
              <div className="space-y-2">
                {languages.map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value.includes(opt)}
                      onCheckedChange={(c) =>
                        field.onChange(
                          c
                            ? [...field.value, opt]
                            : field.value.filter((v: string) => v !== opt)
                        )
                      }
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            )}
          />
          {errors.languages && (
            <p className="text-sm text-red-500">Select at least one language</p>
          )}
        </div>

        {/* Fee Dropdown */}
        <div>
          <Label htmlFor="fee">Fee Range</Label>
          <Controller
            control={control}
            name="fee"
            render={({ field }) => (
              <select
                id="fee"
                value={field.value || ''}
                onChange={(e) => field.onChange(Number(e.target.value))}
                className="w-full border rounded px-3 py-2 dark:bg-zinc-900"
              >
                <option value="">Select Fee Range</option>
                <option value="15000">₹10000 - ₹15000</option>
                <option value="20000">₹15000 - ₹20000</option>
                <option value="25000"> {'>'} ₹20000</option>
              </select>
            )}
          />
          {errors.fee && <p className="text-sm text-red-500">{errors.fee.message}</p>}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register('location')} placeholder="e.g. Delhi" />
          {errors.location && (
            <p className="text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <Label htmlFor="image">Upload Image (optional)</Label>
          <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="preview"
              className="h-24 mt-2 rounded border"
            />
          )}
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <p className="text-lg font-semibold mb-4">
            {artistName} has been onboarded
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
          >
            OK
          </button>
        </div>
      </div>
    )}
    </div>
  )
}
