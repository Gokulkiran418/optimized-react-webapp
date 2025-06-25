// pages/artists.tsx
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'
import fs from 'fs'
import path from 'path'
import type { Artist } from '@/types/artist'
import ArtistsContent from '@/components/ArtistsContent'

type ArtistsPageProps = {
  allArtists: Artist[]
}

export default function ArtistsPage({ allArtists }: ArtistsPageProps) {
  return (
    <>
      <Head>
        <title>Artists | Artistly</title>
        <meta name="description" content="Browse and filter top-performing artists on Artistly." />
      </Head>
      <Suspense fallback={<div className="p-4 text-center">Loading artists…</div>}>
        <ArtistsContent allArtists={allArtists} />
      </Suspense>
    </>
  )
}

export const getStaticProps: GetStaticProps<ArtistsPageProps> = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'artists.json')
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const allArtists: Artist[] = JSON.parse(fileContents)
    return {
      props: {
        allArtists,
      },
      revalidate: 3600, // Incremental Static Regeneration (ISR) every hour
    }
  } catch (error) {
    console.error('Error reading artists.json:', error)
    return {
      props: {
        allArtists: [],
      },
    }
  }
}