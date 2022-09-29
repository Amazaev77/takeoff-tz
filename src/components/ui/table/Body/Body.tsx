import * as React from 'react'
import { FC, useContext } from 'react'
import Row from 'src/components/ui/table/Body/Row/Row'
import { IContact } from 'src/models/IContact'
import { TableContext } from 'src/providers/TableProvider'
import { generateEmptyRows } from 'src/utils/generateEmptyRows'

import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import styles from './Body.module.scss'

const Body: FC = () => {
  const { data, rowsPerPage, page, isLoading } = useContext(TableContext)

  const emptyRows = generateEmptyRows(
    (data && data.length) as number,
    page,
    rowsPerPage,
  )

  return (
    <TableBody>
      {data &&
        !isLoading &&
        (rowsPerPage > 0
          ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : data
        ).map((contact: IContact) => <Row contact={contact} key={contact.id} />)}
      {emptyRows > 0 && (
        <TableRow style={{ height: 67 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}

      {isLoading &&
        [1, 2, 3, 4, 5].map((el) => (
          <TableRow key={el} className={styles.skeletonRow}>
            <TableCell className={styles.skeletonCell}>
              <div />
            </TableCell>
            <TableCell className={styles.skeletonCell}>
              <div />
            </TableCell>
            <TableCell className={styles.skeletonCell}>
              <div />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  )
}

export default Body
