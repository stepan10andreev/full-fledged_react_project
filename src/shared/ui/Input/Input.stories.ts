import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Input } from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'placeholder',
  },
}

export const PrimaryDark: Story = {
  args: {
    placeholder: 'placeholder',
  },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
