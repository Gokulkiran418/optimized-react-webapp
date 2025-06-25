// src/components/ArtistsContent.tsx
'use client'

import { useMemo, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

import type { Artist } from '@/types/artist'
import ArtistCard from '@/components/ArtistCard'
import FilterBlock from '@/components/FilterBlock'

// Dynamically import FixedSizeGrid (no SSR)
const FixedSizeGrid = dynamic(
  () => import('react-window').then((mod) => mod.FixedSizeGrid),
  { ssr: false }
)

interface ArtistsContentProps {
  allArtists: Artist[]
}

export default function ArtistsContent({ allArtists }: ArtistsContentProps) {
  const params = useSearchParams()
  const categoryParam = params.get('category') || ''

  const [filtered, setFiltered] = useState<Artist[]>(
    categoryParam
      ? allArtists.filter((a) => a.category === categoryParam)
      : allArtists
  )
  const [activeCategory, setActiveCategory] = useState(categoryParam)

  const handleFilter = useCallback((results: Artist[]) => {
    setFiltered(results)
    setActiveCategory('') // clear banner when manual filters applied
  }, [])

  const isVirtualized = useMemo(() => filtered.length > 50, [filtered.length])

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-1/4">
        <FilterBlock artists={allArtists} onFilter={handleFilter} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        {activeCategory && (
          <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded">
            Showing results for: <strong>{activeCategory}</strong>
          </div>
        )}

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
            {({ columnIndex, rowIndex, style }) => {
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