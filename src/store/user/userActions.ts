import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from 'src/services/auth/AuthService'
import { IAuthResponse, IEmailPassword } from 'src/store/user/types'

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      return await AuthService.login(email, password)
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('user')
})
