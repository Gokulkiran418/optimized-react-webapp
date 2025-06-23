'use client'

import { useEffect, useMemo, useState, useCallback } from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import ArtistCard from '@/components/ArtistCard'
import FilterBlock from '@/components/FilterBlock'
import type { Artist } from '@/types/artist'
import artistsData from '@/data/artists.json'

export const metadata: Metadata = {
  title: 'Artistly – Browse Artists',
  description: 'Filter and browse performing artists by category, location, and fee.',
}

// Dynamically import FixedSizeGrid
const FixedSizeGrid = dynamic(
  async () => {
    const mod = await import('react-window')
    return mod.FixedSizeGrid
  },
  { ssr: false }
)

export default function ArtistsPage() {
  const allArtists = artistsData as Artist[]
  const [filtered, setFiltered] = useState<Artist[]>(allArtists)

  const handleFilter = useCallback((results: Artist[]) => {
    setFiltered(results)
  }, [])

  const isVirtualized = useMemo(() => filtered.length > 50, [filtered.length])

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-1/4">
        <FilterBlock artists={allArtists} onFilter={handleFilter} />
      </aside>

      {/* Artist Grid or Virtualized Grid */}
      <div className="flex-1">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No artists match your filters.
          </p>
        ) : isVirtualized ? (
          <FixedSizeGrid
            columnCount={3}
            columnWidth={300}
            height={600}
            rowCount={Math.ceil(filtered.length / 3)}
            rowHeight={350}
            width={960}
          >
            {({
              columnIndex,
              rowIndex,
              style,
            }: {
              columnIndex: number
              rowIndex: number
              style: React.CSSProperties
            }) => {
              const index = rowIndex * 3 + columnIndex
              if (index >= filtered.length) return null
              return (
                <div style={style} className="p-2">
                  <ArtistCard artist={filtered[index]} />
                </div>
              )
            }}
          </FixedSizeGrid>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
