import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactAPI } from 'src/services/contact/ContactService'
import { userReducer } from 'src/store/user/userSlice'

export const store = configureStore({
  reducer: {
    [contactAPI.reducerPath]: contactAPI.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactAPI.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
