import { z } from 'zod'

export const artistSchema = z.object({
  name: z.string().min(2),
  bio: z.string().min(10),
  category: z.array(z.string()).min(1),
  languages: z.array(z.string()).min(1),
  fee: z.number().min(0),
  location: z.string().min(2),
  image: z
    .instanceof(File)
    .optional()
    .or(z.string().url().optional()), // fallback if using mock string url
})

export type ArtistFormData = z.infer<typeof artistSchema>
