'use client'

import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'

const shapeTypes = ['circle', 'square', 'blob'] as const
type ShapeType = typeof shapeTypes[number]

type ShapeProps = {
  x: number
  y: number
  size: number
  type: ShapeType
  delay: number
}

const ShapeComponent = ({ x, y, size, type, delay }: ShapeProps) => {
  const baseClass =
    'absolute z-[-1] pointer-events-none transition-colors duration-300'
  const shapeClass =
    type === 'circle'
      ? 'rounded-full'
      : type === 'square'
      ? 'rounded'
      : 'rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%]' // blob style

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 0.15,
        scale: 1,
        x: [0, 10, -10, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      className={`${baseClass} ${shapeClass} bg-black dark:bg-white`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}
ShapeComponent.displayName = 'Shape'

const Shape = memo(ShapeComponent)

export default function BackgroundShapes({
  side = 'full',
}: {
  side?: 'left' | 'right' | 'full'
}) {
  const shapes = useMemo(() => {
    const generated: ShapeProps[] = []

    for (let i = 0; i < 8; i++) {
      const rawX = Math.random() * 40
      const x =
        side === 'left'
          ? rawX
          : side === 'right'
          ? 60 + rawX
          : rawX + Math.random() * 60

      const y = Math.random() * 80
      const size = 40 + Math.random() * 40
      const type =
        shapeTypes[Math.floor(Math.random() * shapeTypes.length)] as ShapeType
      const delay = i * 0.4

      generated.push({ x, y, size, type, delay })
    }

    return generated
  }, [side])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => (
        <Shape key={i} {...shape} />
      ))}
    </div>
  )
}
