'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  title: string
  image: string
}

const CategoryCard = ({ title, image }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
    >
      <Link href="/artists">
        <div className="relative h-40 w-full">
          <Image
            src={image}
            alt={`${title} category`}
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

export default CategoryCard
