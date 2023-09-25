import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
