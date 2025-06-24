// src/types/artist.ts

export type Artist = {
  id: string
  name: string
  category: string
  location: string
  fee: number 
  feerange: string// 👈 replace 'price' with 'fee'
  image?: string
}
