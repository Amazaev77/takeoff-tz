import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from 'src/hooks/useAuth'
import { validEmail } from 'src/shared/regex'

import { Alert, Box, Button, TextField } from '@mui/material'

type FieldTypes = Record<'email' | 'password', string>

const AuthForm: FC = () => {
  const { login, isLoading, authError } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldTypes>()

  const onSubmit: SubmitHandler<FieldTypes> = (data) => {
    login(data)
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
      <TextField
        margin='normal'
        fullWidth
        id='email'
        label='Email Address'
        autoComplete='email'
        error={!!errors?.email}
        helperText={errors?.email ? (errors.email.message as string) : null}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Please enter a valid email address',
          },
        })}
      />
      <TextField
        margin='normal'
        fullWidth
        label='Password'
        type='password'
        id='password'
        error={!!errors?.password}
        helperText={errors?.password ? (errors.password.message as string) : null}
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Min length should more 6 symbols',
          },
        })}
      />
      <Button
        disabled={isLoading}
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
      >
        {isLoading ? 'Loading...' : 'Sign In'}
      </Button>
      {authError && <Alert severity='error'>{authError}</Alert>}
    </Box>
  )
}

export default AuthForm
