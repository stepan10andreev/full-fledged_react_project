import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { getAuthPassword } from './getAuthPassword'

describe('getAutPassword.test', () => {
  test('should return value(string)', () => {
    const state: DeepPartial<StoreSchema> = {
      authForm: {
        password: 'qwerty',
      },
    }
    expect(getAuthPassword(state as StoreSchema)).toEqual('qwerty')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getAuthPassword(state as StoreSchema)).toEqual('')
  })
})
