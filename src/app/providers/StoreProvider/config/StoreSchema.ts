import {
  ReducersMapObject,
  AnyAction,
  Reducer,
  CombinedState,
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { UserSchema } from 'entities/user'
import { AuthSchema } from 'features/AuthByName'

export interface StoreSchema {
  user: UserSchema

  // async reducers
  authForm?: AuthSchema
}

export type StoreSchemaKey = keyof StoreSchema

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>
  add: (key: StoreSchemaKey, reducer: Reducer) => void
  remove: (key: StoreSchemaKey) => void
}

export interface StoreWithManager extends ToolkitStore<StoreSchema> {
  reducerManager: IReducerManager
}
