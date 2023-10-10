import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { UserSchema } from '../types/user.interface'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {},
    setSurname: (state, action: PayloadAction<string>) => {},
    setLastName: (state, action: PayloadAction<string>) => {},
    setEmail: (state, action: PayloadAction<string>) => {},
    setPhone: (state, action: PayloadAction<string>) => {},
    setCode: (state, action: PayloadAction<string>) => {},
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
