import cx from 'classnames'
import * as React from 'react'
import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import RowIcons from 'src/components/ui/table/Body/Row/RowIcons'
import { IContact } from 'src/models/IContact'
import { TableContext } from 'src/providers/TableProvider'
import { validNumber } from 'src/shared/regex'

import { TextField } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import styles from './Row.module.scss'

export interface IRowFields {
  name: string
  number: string
}

const Row: FC<{ contact: IContact }> = ({ contact }) => {
  const { editId } = useContext(TableContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRowFields>()

  return (
    <TableRow
      className={cx(styles.tableRow, { [styles.edit]: editId === contact.id })}
      key={contact.id}
    >
      <TableCell component='th' scope='row'>
        {editId === contact.id ? (
          <TextField
            className={styles.textField}
            defaultValue={contact.name}
            size='small'
            required
            variant='standard'
            helperText={errors?.number ? (errors.number.message as string) : null}
            {...register('name')}
          />
        ) : (
          contact.name
        )}
      </TableCell>
      <TableCell align='left'>
        {editId === contact.id ? (
          <TextField
            className={styles.textField}
            defaultValue={contact.number}
            required
            size='small'
            variant='standard'
            helperText={errors?.number ? (errors.number.message as string) : null}
            {...register('number', {
              required: 'Number is required',
              pattern: {
                value: validNumber,
                message: 'Please enter a valid number',
              },
            })}
          />
        ) : (
          contact.number
        )}
      </TableCell>
      <TableCell className={styles.lastCell} align='left'>
        <RowIcons
          handleSubmit={handleSubmit}
          editId={editId as number}
          contactId={contact.id}
        />
      </TableCell>
    </TableRow>
  )
}

export default Row
