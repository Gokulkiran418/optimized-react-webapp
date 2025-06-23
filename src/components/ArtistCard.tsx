'use client'

import Image from 'next/image'
import { memo } from 'react'
import type { Artist } from '@/types/artist'

interface Props {
  artist: Artist
}

const ArtistCard = ({ artist }: Props) => (
  <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col">
    <div className="relative h-32 w-full mb-3">
      <Image
        src={artist.image}
        alt={artist.name}
        fill
        className="object-cover rounded"
      />
    </div>
    <h3 className="font-semibold text-lg">{artist.name}</h3>
    <p className="text-sm text-muted-foreground">{artist.category}</p>
    <p className="text-sm">{artist.location}</p>
    <p className="mt-auto font-medium">{artist.feeRange}</p>
    <button className="mt-3 bg-primary text-white py-1 rounded hover:bg-primary/80 transition">
      Ask for Quote
    </button>
  </div>
)

export default memo(ArtistCard)
