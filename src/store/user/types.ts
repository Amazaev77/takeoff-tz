import { IUser } from 'src/models/IUser'

export interface UserState {
  user: Omit<IUser, 'password'> | null
  isLoading: boolean
  error: string | null
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface IAuthResponse extends IUser {}
