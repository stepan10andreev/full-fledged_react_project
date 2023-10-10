import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StoreSchema } from '../config/StoreSchema'
import { DeepPartial } from '@reduxjs/toolkit'

interface IStoreProviderProps {
  children: React.ReactNode
  initialState?: DeepPartial<StoreSchema>
}

export function StoreProvider({ children, initialState }: IStoreProviderProps) {
  const store = createReduxStore(initialState as StoreSchema)

  return <Provider store={store}>{children}</Provider>
}
