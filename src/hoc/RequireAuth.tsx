import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'

const RequireAuth: FC = () => {
  const { isAuth } = useAuth()
  const location = useLocation()

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
