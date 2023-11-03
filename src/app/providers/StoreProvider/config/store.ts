import {
  DeepPartial,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit'
import { StoreSchema } from './StoreSchema'
import { userReducer } from 'entities/user'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
  initialState?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>
) {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: _IS_DEV_,
    preloadedState: initialState,
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
