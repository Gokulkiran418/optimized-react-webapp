import { Metadata } from 'next'
import { useMemo } from 'react'
import submissionsData from '@/data/submissions.json'
import { Table } from '@/components/Table'
import { TableRow } from '@/components/TableRow'
import type { Submission } from '@/types/submission'

export const metadata: Metadata = {
  title: 'Artistly – Manager Dashboard',
  description: 'View and manage artist submissions on Artistly.',
}

export default function DashboardPage() {
  const submissions = submissionsData as Submission[]

  const rows = useMemo(
    () =>
      submissions.map((sub) => (
        <TableRow key={sub.id} data={sub} />
      )),
    [submissions]
  )

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>

      {submissions.length > 0 ? (
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
            {rows}
          </tbody>
        </Table>
      ) : (
        <p className="text-center text-muted-foreground">No submissions found.</p>
      )}
    </section>
  )
}
