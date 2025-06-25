'use client'
import React, { memo, useMemo } from 'react'

interface TableProps {
  children: React.ReactNode
}

const TableComponent: React.FC<TableProps> = ({ children }) => {
  const memoizedChildren = useMemo(() => children, [children])

  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-700">
      {memoizedChildren}
    </table>
  )
}

TableComponent.displayName = 'Table'

export const Table = memo(TableComponent)
