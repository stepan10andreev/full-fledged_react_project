import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StoreSchema } from './StoreSchema'
import { userReducer } from 'entities/user'

export function createReduxStore(initialState?: StoreSchema) {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    user: userReducer,
  }

  return configureStore<StoreSchema>({
    reducer: rootReducers,
    devTools: _IS_DEV_,
    preloadedState: initialState,
  })
}

const store = createReduxStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
