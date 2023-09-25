import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppError } from './AppError'

const meta = {
  title: 'widgets/AppError',
  component: AppError,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
