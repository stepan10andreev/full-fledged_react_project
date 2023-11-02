import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, userActions } from 'entities/user'
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage'

interface ILoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  { rejectValue: string }
>('auth/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/login', authData)

    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data))
    thunkAPI.dispatch(userActions.setUserData(response.data))

    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('error')
  }
})
