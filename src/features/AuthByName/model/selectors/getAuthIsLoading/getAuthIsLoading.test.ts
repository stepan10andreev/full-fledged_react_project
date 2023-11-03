import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { getAuthIsLoading } from './getAuthIsLoading'

describe('getAuthIsLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StoreSchema> = {
      authForm: {
        isLoading: true,
      },
    }
    expect(getAuthIsLoading(state as StoreSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getAuthIsLoading(state as StoreSchema)).toEqual(false)
  })
})
