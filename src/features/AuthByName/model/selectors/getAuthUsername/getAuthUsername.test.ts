import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { getAuthUsername } from './getAuthUsername'

describe('getAutUsername.test', () => {
  test('should return value(string)', () => {
    const state: DeepPartial<StoreSchema> = {
      authForm: {
        username: 'admin',
      },
    }
    expect(getAuthUsername(state as StoreSchema)).toEqual('admin')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getAuthUsername(state as StoreSchema)).toEqual('')
  })
})
