'use client'

import Image from 'next/image'
import { memo, useState } from 'react'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 10,
        },
      }}
      transition={{
        type: 'spring',
        duration: 0.8,
        bounce: 0.5,
        ease: 'easeOut',
      }}
      className="bg-white dark:bg-black rounded-xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300 p-4 flex flex-col relative"
    >
      {/* Artist Image */}
      <div className="relative h-32 w-full mb-3 rounded overflow-hidden">
        <Image
          src={artist.image ?? '/placeholder.png'}
          alt={artist.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
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
        className="mt-auto bg-primary text-white py-1 rounded hover:bg-primary/80 transition dark:bg-white dark:text-black dark:hover:bg-gray-600"
        onClick={() => setShowModal(true)}
      >
        Ask for Quote
      </button>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg w-72 relative">
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
    </motion.div>
  )
}

export default memo(ArtistCard)
