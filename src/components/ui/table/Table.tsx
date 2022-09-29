import * as React from 'react'
import AddItemForm from 'src/components/ui/add-item-form/AddItemForm'
import TableProvider from 'src/providers/TableProvider'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import Body from './Body/Body'
import Footer from './Footer/Footer'
import Header from './Head/Head'
import styles from './Table.module.scss'

export default function TableComponent() {
  return (
    <TableProvider>
      <TableContainer component={Paper} sx={{ maxWidth: 700, margin: '20px auto' }}>
        <Table className={styles.table} sx={{ maxWidth: 700 }}>
          <Header />
          <Body />
          <Footer />
        </Table>
      </TableContainer>
      <AddItemForm />
    </TableProvider>
  )
}
