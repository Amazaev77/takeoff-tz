import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from 'src/models/IUser'
import { UserState } from 'src/store/user/types'
import { getFromLocalStorage } from 'src/utils/getFromLocalStorage'

import { login, logout } from './userActions'

const initialState: UserState = {
  user: getFromLocalStorage('user'),
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoading = true
    },
    [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.isLoading = false
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [logout.fulfilled.type]: (state) => {
      state.user = null
      state.isLoading = false
      state.error = null
    },
  },
})

export const { reducer: userReducer } = userSlice
