import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { EThemeButton } from './button.interface'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Border: Story = {
  args: {
    children: 'Text',
    theme: EThemeButton.BORDER,
  },
}

export const BorderDark: Story = {
  args: {
    children: 'Text',
    theme: EThemeButton.BORDER,
  },
}
BorderDark.decorators = [ThemeDecorator(Theme.DARK)]
