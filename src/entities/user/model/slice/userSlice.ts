import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser, UserSchema } from '../types/user.interface'
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage'

const initialState: UserSchema = {
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
      state.isAuth = true
    },
    initUserData: (state) => {
      const user = localStorage.getItem(LOCALSTORAGE_USER_KEY)

      if (user) {
        state.authData = JSON.parse(user)
        state.isAuth = true
      }
    },
    logOut: (state) => {
      state.authData = undefined
      state.isAuth = false
      localStorage.removeItem(LOCALSTORAGE_USER_KEY)
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
