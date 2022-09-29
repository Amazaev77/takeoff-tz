import { IAuthResponse } from 'src/store/user/types'

export const saveToStorage = (data: IAuthResponse) => {
  localStorage.setItem('user', JSON.stringify(data))
}
