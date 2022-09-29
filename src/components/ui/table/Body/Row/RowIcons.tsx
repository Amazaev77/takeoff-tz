import * as React from 'react'
import { FC, useContext } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { UseFormHandleSubmit } from 'react-hook-form/dist/types/form'
import { TableContext } from 'src/providers/TableProvider'
import { useDeleteContact, useUpdateContact } from 'src/services/contact/ContactService'

import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import EditIcon from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'

import { IRowFields } from './Row'
import styles from './Row.module.scss'

interface IRowIcons {
  handleSubmit: UseFormHandleSubmit<IRowFields>
  editId: number
  contactId: number
}

const RowIcons: FC<IRowIcons> = ({ handleSubmit, contactId }) => {
  const { editId, setEditId } = useContext(TableContext)

  const [updateContact, { isLoading: updating }] = useUpdateContact()
  const [deleteContact, { isLoading: deleting }] = useDeleteContact()

  const handleRemove = () => deleteContact(contactId)

  const handleEdit: SubmitHandler<IRowFields> = (data) => {
    updateContact({ id: contactId, ...data })
    if (editId) setEditId(null)
    else setEditId(contactId)
  }

  return (
    <Box className={styles.icons}>
      <IconButton
        disabled={deleting || updating}
        onClick={handleSubmit(handleEdit)}
        size='small'
      >
        {editId === contactId ? (
          <DoneIcon color={deleting || updating ? 'disabled' : 'success'} />
        ) : (
          <EditIcon color={deleting || updating ? 'disabled' : 'primary'} />
        )}
      </IconButton>
      <IconButton disabled={deleting || updating} onClick={handleRemove} size='small'>
        <DeleteIcon color={deleting || updating ? 'disabled' : 'error'} />
      </IconButton>
    </Box>
  )
}

export default RowIcons
