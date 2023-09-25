import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, EAppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    to: '/',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: EAppLinkTheme.PRIMARY,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: EAppLinkTheme.SECONDARY,
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: EAppLinkTheme.PRIMARY,
  },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: EAppLinkTheme.SECONDARY,
  },
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
