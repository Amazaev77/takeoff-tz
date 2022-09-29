import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import AuthForm from 'src/components/ui/auth-form/AuthForm'
import { useAuth } from 'src/hooks/useAuth'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Container, Typography } from '@mui/material'

const Login: FC = () => {
  const { isAuth } = useAuth()

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <AuthForm />
      </Box>
    </Container>
  )
}

export default Login
