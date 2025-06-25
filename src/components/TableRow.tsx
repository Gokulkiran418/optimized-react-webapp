'use client'

import Image from 'next/image'
import React, { useState, memo, useMemo } from 'react'
import { createPortal } from 'react-dom'
import type { Submission } from '@/types/submission'
import type { Artist } from '@/types/artist'

interface TableRowProps {
  data: Submission
  artist: Artist | null
}

const TableRowComponent: React.FC<TableRowProps> = ({ data, artist }) => {
  const [showModal, setShowModal] = useState(false)

  const artistImage = useMemo(() => artist?.image || '/placeholder.png', [artist])
  const artistName = useMemo(() => artist?.name || 'Unknown Artist', [artist])

  const modal = useMemo(() => {
    if (!showModal) return null
    return createPortal(
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="relative bg-white dark:bg-zinc-900 rounded-lg shadow-xl p-6 w-80 text-center">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-3 text-xl text-gray-500 hover:text-gray-700 dark:hover:text-white"
          >
            ×
          </button>
          <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden border">
            <Image
              src={artistImage}
              alt={artistName}
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold">{artistName}</h2>
        </div>
      </div>,
      document.body
    )
  }, [showModal, artistImage, artistName])

  return (
    <>
      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800 dark:border-white">
        <td className="px-4 py-2 border-b dark:border-white">{data.name}</td>
        <td className="px-4 py-2 border-b dark:border-white">{data.category}</td>
        <td className="px-4 py-2 border-b dark:border-white">{data.city}</td>
        <td className="px-4 py-2 border-b dark:border-white">₹{data.fee}</td>
        <td className="px-4 py-2 border-b dark:border-white">
          <button
            className="px-3 py-1 text-sm text-white bg-primary dark:bg-gray-900 rounded dark:hover:bg-black transition hover:bg-gray-500"
            onClick={() => setShowModal(true)}
          >
            View
          </button>
        </td>
      </tr>
      {modal}
    </>
  )
}

TableRowComponent.displayName = 'TableRow'

export const TableRow = memo(TableRowComponent)
