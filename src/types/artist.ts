// src/types/artist.ts

export type Artist = {
  id: string
  name: string
  category: string
  location: string
  fee: number // 👈 replace 'price' with 'fee'
  image?: string
}
