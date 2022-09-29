import { FC } from 'react'
import SearchField from 'src/components/ui/search-field/SearchField'
import { IColumn } from 'src/components/ui/table/types'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import styles from './Head.module.scss'

const columns: IColumn[] = [
  { label: 'Name', id: 1 },
  { label: 'Number', id: 2 },
]

const Head: FC = () => {
  return (
    <TableHead>
      <TableRow className={styles.tableHeadRow}>
        {columns.map((column) => (
          <TableCell key={column.id}>
            <span>{column.label}</span>
          </TableCell>
        ))}
        <TableCell>
          <SearchField />
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default Head
