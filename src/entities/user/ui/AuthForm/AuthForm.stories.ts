import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AuthForm } from './AuthForm'

const meta = {
  title: 'shared/AuthForm',
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

export const PrimaryDark: Story = {
  args: {},
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
