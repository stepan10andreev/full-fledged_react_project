import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StoreSchema } from '../config/StoreSchema'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'

interface IStoreProviderProps {
  children: React.ReactNode
  initialState?: DeepPartial<StoreSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
}

export function StoreProvider({
  children,
  initialState,
  asyncReducers,
}: IStoreProviderProps) {
  const store = createReduxStore(
    initialState as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>
  )

  return <Provider store={store}>{children}</Provider>
}
