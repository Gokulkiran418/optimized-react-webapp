'use client'
import React, { memo } from 'react'
import type { Submission } from '@/types/submission'

interface TableRowProps {
  data: Submission
}

const TableRowComponent: React.FC<TableRowProps> = ({ data }) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-800">
    <td className="px-4 py-2">{data.name}</td>
    <td className="px-4 py-2">{data.category}</td>
    <td className="px-4 py-2">{data.city}</td>
    <td className="px-4 py-2">₹{data.fee}</td>
    <td className="px-4 py-2">
      <button className="text-sm text-primary hover:underline">View</button>
    </td>
  </tr>
)

export const TableRow = memo(TableRowComponent)
