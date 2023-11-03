import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { getAuthError } from './getAuthError'

describe('getAuthError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StoreSchema> = {
      authForm: {
        error: 'error',
      },
    }
    expect(getAuthError(state as StoreSchema)).toEqual('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getAuthError(state as StoreSchema)).toEqual(undefined)
  })
})
