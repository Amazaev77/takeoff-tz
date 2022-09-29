import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'

import LogoutIcon from '@mui/icons-material/Logout'
import { AppBar, Box, Tab } from '@mui/material'
import IconButton from '@mui/material/IconButton'

const Header: FC = () => {
  const { pathname } = useLocation()
  const { logout, isAuth } = useAuth()

  const handleLogout = () => logout()

  return (
    <Box>
      <AppBar position='static' sx={{ padding: '0 10px' }}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Tab
            style={{ opacity: 1, fontSize: 15 }}
            label={`${pathname.slice(1) ? pathname.slice(1) : 'Home'} page`}
          />
          {isAuth && (
            <IconButton onClick={handleLogout} size='medium' color='inherit'>
              <LogoutIcon fontSize='large' />
            </IconButton>
          )}
        </Box>
      </AppBar>
    </Box>
  )
}

export default Header
