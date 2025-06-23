'use client'
import React from 'react'
import clsx from 'clsx'

interface TableProps {
  children: React.ReactNode
}

export const Table: React.FC<TableProps> = ({ children }) => (
  <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-700">
    {children}
  </table>
)
