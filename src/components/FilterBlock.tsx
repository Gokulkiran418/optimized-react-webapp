'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import type { Artist } from '@/types/artist'

type FilterBlockProps = {
  artists: Artist[]
  onFilter: (filtered: Artist[]) => void
}

export default function FilterBlock({ artists, onFilter }: FilterBlockProps) {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')

  const uniqueCategories = useMemo(
    () => Array.from(new Set(artists.map((a) => a.category))),
    [artists]
  )

  const uniqueLocations = useMemo(
    () => Array.from(new Set(artists.map((a) => a.location))),
    [artists]
  )

  const priceRanges = ['< ₹15000', '₹10000 - ₹20000', '> ₹20000']

  const filterArtists = useCallback(() => {
    const result = artists.filter((a) => {
      const matchCategory = category ? a.category === category : true
      const matchLocation = location ? a.location === location : true
      const matchPrice =
        price === '< ₹15000'
          ? a.fee <= 15000
          : price === '₹10000 - ₹20000'
          ? a.fee > 10000 && a.fee <= 20000
          : price === '> ₹20000'
          ? a.fee > 20000
          : true

      return matchCategory && matchLocation && matchPrice
    })

    onFilter(result)
  }, [artists, category, location, price, onFilter])

  // ✅ Correct side-effect usage
  useEffect(() => {
    filterArtists()
  }, [filterArtists])

  return (
    <div className="space-y-4">
      {/* Category */}
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">All</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="block mb-1 font-medium">Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">All</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block mb-1 font-medium">Price Range</label>
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">All</option>
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
