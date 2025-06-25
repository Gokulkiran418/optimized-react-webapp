'use client'

import Image from 'next/image'
import { memo, useState } from 'react'
import type { Artist } from '@/types/artist'

interface Props {
  artist: Artist
}

const ArtistCard = ({ artist }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [quote, setQuote] = useState('')
  const [sent, setSent] = useState(false)
  const [quoteError, setQuoteError] = useState('')

  const handleSend = () => {
    const parsed = parseInt(quote)
    if (!parsed || parsed <= 0) {
      setQuoteError('Please enter a valid number')
      return
    }

    setQuoteError('')
    setSent(true)
    setTimeout(() => {
      setShowModal(false)
      setSent(false)
      setQuote('')
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col relative">
      {/* Artist Image */}
      <div className="relative h-32 w-full mb-3">
        <Image
          src={artist.image ?? '/placeholder.png'}
          alt={artist.name}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Artist Info */}
      <h3 className="font-semibold text-lg">{artist.name}</h3>
      <p className="text-sm text-muted-foreground">{artist.category}</p>
      <p className="text-sm">{artist.location}</p>
      <p className="mt-1 text-sm text-primary font-medium">
        Fee: ₹{artist.feerange}
      </p>

      {/* CTA Button */}
      <button
        className="mt-auto bg-primary text-white py-1 rounded hover:bg-primary/80 transition dark:bg-black dark:text-white dark:hover:bg-gray-600"
        onClick={() => setShowModal(true)}
      >
        Ask for Quote
      </button>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg w-72 relative">
            {/* Close button */}
            <button
              onClick={() => {
                setShowModal(false)
                setQuote('')
                setQuoteError('')
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-lg font-bold"
            >
              ×
            </button>

            {!sent ? (
              <>
                <h4 className="text-lg font-semibold mb-2">Send a Quote</h4>
                <input
                  type="number"
                  placeholder="₹ Enter fee"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="w-full border rounded px-3 py-1 mb-1 dark:bg-zinc-700"
                />
                {quoteError && (
                  <p className="text-sm text-red-500 mb-2">{quoteError}</p>
                )}
                <button
                  onClick={handleSend}
                  className="w-full bg-primary text-white py-1 rounded hover:bg-primary/80 transition"
                >
                  Send Quote
                </button>
              </>
            ) : (
              <p className="text-center text-green-600 font-medium">
                Quote sent!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(ArtistCard)
