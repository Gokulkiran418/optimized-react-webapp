'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { memo, useMemo } from 'react'

interface Props {
  title: string
  image: string
}

const CategoryCard = ({ title, image }: Props) => {
  const href = useMemo(() => `/artists?category=${encodeURIComponent(title)}`, [title])
  const altText = useMemo(() => `${title} category`, [title])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      className="rounded-lg overflow-hidden shadow border border-black dark:border-white"
    >
      <Link href={href}>
        <div className="relative h-40 w-full">
          <Image
            src={image}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 text-center text-sm font-semibold">
          {title}
        </div>
      </Link>
    </motion.div>
  )
}

export default memo(CategoryCard)
