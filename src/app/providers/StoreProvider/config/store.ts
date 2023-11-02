import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StoreSchema } from './StoreSchema'
import { userReducer } from 'entities/user'
import { authReducer } from 'features/AuthByName'

export function createReduxStore(initialState?: StoreSchema) {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    authForm: authReducer,
  }

  return configureStore<StoreSchema>({
    reducer: rootReducers,
    devTools: _IS_DEV_,
    preloadedState: initialState,
  })
}

const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
