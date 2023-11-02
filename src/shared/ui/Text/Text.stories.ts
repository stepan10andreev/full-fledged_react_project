import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'
import { ETextTheme } from './text.interface'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    theme: ETextTheme.PRIMARY,
  },
}

export const PrimaryDark: Story = {
  args: {
    text: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    theme: ETextTheme.PRIMARY,
  },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary: Story = {
  args: {
    text: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    theme: ETextTheme.SECONDARY,
  },
}

export const SecondaryDark: Story = {
  args: {
    text: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    theme: ETextTheme.SECONDARY,
  },
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error: Story = {
  args: {
    text: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    theme: ETextTheme.ERROR,
  },
}
