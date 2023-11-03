import { StoreWithManager } from 'app/providers/StoreProvider/config/StoreSchema'
import { FC, useEffect } from 'react'
import { useStore } from 'react-redux'
import {
  IDynamicModuleLoaderProps,
  TReducerListEntry,
} from './dynamicModuleLoader.interface'

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as StoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: TReducerListEntry) => {
      store.reducerManager.add(name, reducer)
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: TReducerListEntry) => {
            store.reducerManager.remove(name)
          }
        )
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return children
}
