// src/app/artists/page.tsx
import { Suspense } from 'react'
import type { Artist } from '@/types/artist'
import artistsData from '@/data/artists.json'
import ArtistsContent from '@/components/ArtistsContent'

// Server component
export default function ArtistsPage() {
  const allArtists = artistsData as Artist[]

  return (
    <Suspense fallback={<div className="p-4 text-center">Loading artists…</div>}>
      <ArtistsContent allArtists={allArtists} />
    </Suspense>
  )
}