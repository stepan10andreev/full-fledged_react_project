import { DeepPartial } from '@reduxjs/toolkit'
import { AuthSchema } from '../types/authSchema.interface'
import { authActions, authReducer } from './authSlice'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

describe('authSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<AuthSchema> = { username: 'admin' }
    expect(
      authReducer(state as AuthSchema, authActions.setUsername('aaabbbccc'))
    ).toEqual({ username: 'aaabbbccc' })
  })

  test('test set password', () => {
    const state: DeepPartial<AuthSchema> = { password: 'qwerty' }
    expect(
      authReducer(state as AuthSchema, authActions.setPassword('Aa1!'))
    ).toEqual({ password: 'Aa1!' })
  })

  // test example of extra reducers
  test('test set isLoading', () => {
    const state: DeepPartial<AuthSchema> = { isLoading: false }
    expect(authReducer(state as AuthSchema, loginByUsername.pending)).toEqual({
      isLoading: true,
    })
  })
})
