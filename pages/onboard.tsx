'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { artistSchema, ArtistFormData } from '@/lib/schema/artistSchema'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'
import { Checkbox } from '@/components/ui/Checkbox'
import MultiSelect from '@/components/ui/multi-select'
import BackgroundShapes from '@/components/BackgroundShapes'
import Image from 'next/image'

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker']
const languages = ['English', 'Hindi', 'Tamil', 'Punjabi']
const feeOptions = [
  { label: '₹10,000 - ₹15,000', value: 15000 },
  { label: '₹15,000 - ₹20,000', value: 20000 },
  { label: '> ₹20,000', value: 25000 },
]

export default function OnboardingPage() {
  const [showModal, setShowModal] = useState(false)
  const [artistName, setArtistName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ArtistFormData>({
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

  const onSubmit = (data: ArtistFormData) => {
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
     <div className="relative overflow-hidden">
      <BackgroundShapes side="left" />
      <BackgroundShapes side="right" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
      className="relative z-10 max-w-2xl mx-auto p-6 space-y-8"
    >
      <Card className="bg-white dark:bg-zinc-900 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Artist Onboarding</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register('name')} placeholder="Artist Name" />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" {...register('bio')} placeholder="Brief bio" />
              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>

            {/* Category */}
            <div className="space-y-1">
              <Label>Category</Label>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <MultiSelect
                    options={categories}
                    selected={field.value}
                    onChange={field.onChange}
                    placeholder="Select categories"
                  />
                )}
              />
              {errors.category && (
                <p className="text-sm text-red-500">
                  Select at least one category
                </p>
              )}
            </div>

            {/* Languages */}
            <div className="space-y-1">
              <Label>Languages</Label>
              <Controller
                control={control}
                name="languages"
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-4">
                    {languages.map((lang) => (
                      <label key={lang} className="flex items-center gap-2">
                        <Checkbox
                          checked={field.value.includes(lang)}
                          onCheckedChange={(v) =>
                            field.onChange(
                              v
                                ? [...field.value, lang]
                                : field.value.filter((l) => l !== lang)
                            )
                          }
                        />
                        <span>{lang}</span>
                      </label>
                    ))}
                  </div>
                )}
              />
              {errors.languages && (
                <p className="text-sm text-red-500">
                  Select at least one language
                </p>
              )}
            </div>

            {/* Fee */}
            <div className="space-y-1">
              <Label htmlFor="fee">Fee Range</Label>
              <Controller
                control={control}
                name="fee"
                render={({ field }) => (
                  <select
                    id="fee"
                    value={field.value || ''}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    className="w-full border rounded px-3 py-2 dark:bg-zinc-800"
                  >
                    <option value="">Select Fee Range</option>
                    {feeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.fee && (
                <p className="text-sm text-red-500">{errors.fee.message}</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-1">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                {...register('location')}
                placeholder="e.g. Delhi"
              />
              {errors.location && (
                <p className="text-sm text-red-500">{errors.location.message}</p>
              )}
            </div>

            {/* Image Upload */}
            <div className="space-y-1">
              <Label htmlFor="image">Profile Image (optional)</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {imageUrl && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-32 w-32 rounded overflow-hidden mt-2 mx-auto"
                >
                  <Image
                    src={imageUrl}
                    alt="preview"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 dark:bg-indigo-400 hover:bg-indigo-700 dark:hover:bg-indigo-300 transition"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Confirmation Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto"
          >
            <p className="text-lg mb-4">
              <strong>{artistName}</strong> has been onboarded! (mock submission)
            </p>
            <Button onClick={() => setShowModal(false)}>OK</Button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  </div>
  )
}
