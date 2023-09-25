import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NavBar } from './NavBar'

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

export const Dark: Story = {
  args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
