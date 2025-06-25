'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import BackgroundShapes from './BackgroundShapes'
import Link from 'next/link'

function Hero() {
  const heading = useMemo(
    () => 'Discover & Book Performing Artists',
    []
  )

  const subheading = useMemo(
    () => 'From Singers to DJs — explore artists for your next big event.',
    []
  )

  const buttonText = useMemo(() => 'Explore Artists', [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      className="relative text-center max-w-2xl mx-auto pt-[60px] pb-10 mt-[-15px] space-y-6"
    >
      {/* Background animated shapes */}
      <BackgroundShapes />

      <h1 className="text-4xl md:text-5xl font-bold">{heading}</h1>
      <p className="text-muted-foreground text-lg">{subheading}</p>

      {/* Spinner around button */}
      <div className="relative w-36 h-36 mx-auto">
        <div className="absolute inset-0 border-4 border-primary bg-gray-700 rounded-[20%] dark:bg-white animate-spin-slow rotate-45 z-0" />

        <Link
          href="/artists"
          className="absolute inset-2 bg-primary dark:bg-black text-white flex items-center justify-center transform rotate-45 rounded-[10%] font-semibold text-sm z-10 hover:scale-105 transition-transform"
        >
          <span className="transform -rotate-45">{buttonText}</span>
        </Link>
      </div>
    </motion.div>
  )
}

export default memo(Hero)
