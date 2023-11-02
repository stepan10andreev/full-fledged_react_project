import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NavBar } from './NavBar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'widgets/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
}
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
  args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const AuthNavbar: Story = {
  args: {},
}
AuthNavbar.decorators = [
  StoreDecorator({
    user: { isAuth: true },
  }),
]
