import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { logout } from 'src/store/user/userActions'

export const useAuth = () => {
  const { login, logout } = useActions()

  const user = useTypedSelector((state) => state.user.user)

  const isLoading = useTypedSelector((state) => state.user.isLoading)
  const authError = useTypedSelector((state) => state.user.error)

  return { isAuth: user, isLoading, login, logout, authError }
}
