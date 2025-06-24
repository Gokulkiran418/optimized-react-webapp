'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import type { Submission } from '@/types/submission'
import artists from '@/data/artists.json'

interface TableRowProps {
  data: Submission
}

export const TableRow: React.FC<TableRowProps> = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const artist = artists.find((a) => a.name === data.name)

  return (
    <>
      <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800">
        <td className="px-4 py-2">{data.name}</td>
        <td className="px-4 py-2">{data.category}</td>
        <td className="px-4 py-2">{data.city}</td>
        <td className="px-4 py-2">₹{data.fee}</td>
        <td className="px-4 py-2">
          <button 
            className="px-3 py-1 text-sm text-white bg-primary dark:bg-gray-900 rounded dark:hover:bg-black transition hover:bg-gray-500 transition dark:bg-black"
            onClick={() => setShowModal(true)}
          >
            View
          </button>
        </td>
      </tr>

      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-white dark:bg-zinc-900 rounded-lg shadow-xl p-6 w-80 text-center">
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-gray-700 dark:hover:text-white"
              >
                &times;
              </button>

              {/* Artist Image */}
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden border">
                <Image
                  src={artist?.image || '/placeholder.png'}
                  alt={artist?.name || 'Artist'}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Artist Name */}
              <h2 className="text-lg font-semibold">{artist?.name || 'Unknown Artist'}</h2>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
