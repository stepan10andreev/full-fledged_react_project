import { Reducer } from '@reduxjs/toolkit'
import { StoreSchemaKey } from 'app/providers/StoreProvider/config/StoreSchema'
import { PropsWithChildren } from 'react'

export type TReducerList = {
  [name in StoreSchemaKey]?: Reducer
}

export type TReducerListEntry = [StoreSchemaKey, Reducer]

export interface IDynamicModuleLoaderProps extends PropsWithChildren {
  reducers: TReducerList
  removeAfterUnmount?: boolean
}
