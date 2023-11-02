import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AuthForm } from './AuthForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'features/AuthForm',
  component: AuthForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AuthForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
Primary.decorators = [
  StoreDecorator({
    authForm: { username: 'user', password: 'qwerty' },
  }),
]

export const WithError: Story = {
  args: {},
}
WithError.decorators = [
  StoreDecorator({
    authForm: { username: 'user', password: 'qwerty', error: 'ERROR' },
  }),
]

export const IsLoading: Story = {
  args: {},
}
IsLoading.decorators = [
  StoreDecorator({
    authForm: { username: 'user', password: 'qwerty', isLoading: true },
  }),
]

export const PrimaryDark: Story = {
  args: {},
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
