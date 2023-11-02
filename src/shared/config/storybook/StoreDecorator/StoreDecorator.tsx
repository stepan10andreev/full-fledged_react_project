import { DeepPartial } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import 'app/styles/index.scss'

export const StoreDecorator =
  (state: DeepPartial<StoreSchema>) => (StoryComponent: StoryFn) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    )
