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
import type { ArtistFormData as FormData } from '@/lib/schema/artistSchema'

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker']
const languages = ['English', 'Hindi', 'Tamil', 'Punjabi']

export default function OnboardingPage() {
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
    alert('Artist submitted successfully!')
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

        {/* Category */}
        <div>
          <Label>Category</Label>
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <div className="space-y-2">
                {categories.map((opt) => (
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
          {errors.category && <p className="text-sm text-red-500">Select at least one category</p>}
        </div>

        {/* Languages */}
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
          {errors.languages && <p className="text-sm text-red-500">Select at least one language</p>}
        </div>

        {/* Fee */}
        <div>
          <Label htmlFor="fee">Fee (₹)</Label>
          <Input
            id="fee"
            type="number"
            {...register('fee', { valueAsNumber: true })}
          />
          {errors.fee && <p className="text-sm text-red-500">{errors.fee.message}</p>}
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register('location')} placeholder="e.g. Delhi" />
          {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
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
    </div>
  )
}
