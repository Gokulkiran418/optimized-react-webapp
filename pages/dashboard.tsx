// pages/dashboard.tsx
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import type { Submission } from '@/types/submission'
import type { Artist } from '@/types/artist'
import { Table } from '@/components/Table'
import { TableRow } from '@/components/TableRow'

type DashboardPageProps = {
  submissionsWithArtists: Array<Submission & { artist: Artist | null }>
}

export default function DashboardPage({ submissionsWithArtists }: DashboardPageProps) {
  return (
    <>
      <Head>
        <title>Manager Dashboard | Artistly</title>
        <meta name="description" content="View onboarded artists on Artistly's manager dashboard." />
      </Head>
      <section className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
        {submissionsWithArtists.length > 0 ? (
          <Table>
            <thead className="bg-gray-100 dark:bg-zinc-700">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">City</th>
                <th className="px-4 py-2 text-left">Fee</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
              {submissionsWithArtists.map((item) => (
                <TableRow key={item.id} data={item} artist={item.artist} />
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-center text-muted-foreground">No Artists found.</p>
        )}
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<DashboardPageProps> = async () => {
  try {
    // Fetch submissions
    const submissionsPath = path.join(process.cwd(), 'public', 'data', 'submissions.json')
    const submissionsContent = fs.readFileSync(submissionsPath, 'utf8')
    const submissions: Submission[] = JSON.parse(submissionsContent)

    // Fetch artists
    const artistsPath = path.join(process.cwd(), 'public', 'data', 'artists.json')
    const artistsContent = fs.readFileSync(artistsPath, 'utf8')
    const artists: Artist[] = JSON.parse(artistsContent)

    // Combine submissions with artist data
    const submissionsWithArtists = submissions.map((submission) => ({
      ...submission,
      artist: artists.find((a) => a.name === submission.name) || null,
    }))

    return {
      props: {
        submissionsWithArtists,
      },
    }
  } catch (error) {
    console.error('Error reading submissions or artists:', error)
    return {
      props: {
        submissionsWithArtists: [],
      },
    }
  }
}