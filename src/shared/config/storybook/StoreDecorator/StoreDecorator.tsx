import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import 'app/styles/index.scss'
import { authReducer } from 'features/AuthByName/model/slice/authSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = {
  authForm: authReducer,
}

export const StoreDecorator =
  (
    state: DeepPartial<StoreSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
  ) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
