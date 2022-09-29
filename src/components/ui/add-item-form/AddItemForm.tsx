import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateContact } from 'src/services/contact/ContactService'
import { validNumber } from 'src/shared/regex'

import { Button, TextField } from '@mui/material'

import styles from './AddItemForm.module.scss'

interface IFields {
  name: string
  number: string
}

const AddItemForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFields>()
  const [createContact, { isLoading }] = useCreateContact()

  const onSubmit: SubmitHandler<IFields> = (data) => {
    createContact(data)
    reset()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        id='name'
        label='Name'
        autoFocus
        variant='outlined'
        helperText={errors?.name ? (errors.name.message as string) : null}
        {...register('name', { required: true })}
      />
      <TextField
        className={styles.field}
        id='password'
        label='Phone'
        autoFocus
        variant='outlined'
        helperText={errors?.number ? (errors.number.message as string) : null}
        {...register('number', {
          required: true,
          pattern: {
            value: validNumber,
            message: 'Please enter a valid number',
          },
        })}
      />
      <Button
        className={styles.button}
        disabled={isLoading}
        type='submit'
        variant='contained'
      >
        Add
      </Button>
    </form>
  )
}

export default AddItemForm
