import * as React from 'react'

export interface IColumn {
  label: string
  id: number
}

export interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void
}
