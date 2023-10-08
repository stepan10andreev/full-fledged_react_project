import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import {
  EButtonBackground,
  EButtonSizes,
  EButtonTheme,
} from './button.interface'
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
    theme: EButtonTheme.BORDER,
  },
}

export const BorderDark: Story = {
  args: {
    children: 'Text',
    theme: EButtonTheme.BORDER,
  },
}
BorderDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background: Story = {
  args: {
    children: 'Text',
    background: EButtonBackground.BACKGROUND,
  },
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    background: EButtonBackground.BACKGROUND_INVERTED,
  },
}

export const Size_m: Story = {
  args: {
    children: 'Text',
    size: EButtonSizes.small,
    background: EButtonBackground.BACKGROUND_INVERTED,
  },
}

export const Size_l: Story = {
  args: {
    children: 'Text',
    size: EButtonSizes.medium,
    background: EButtonBackground.BACKGROUND_INVERTED,
  },
}

export const Size_xl: Story = {
  args: {
    children: 'Text',
    size: EButtonSizes.large,
    background: EButtonBackground.BACKGROUND_INVERTED,
  },
}

export const Border_Size_m: Story = {
  args: {
    children: 'Text',
    size: EButtonSizes.small,
    theme: EButtonTheme.BORDER,
  },
}

export const Border_Size_l: Story = {
  args: {
    children: 'Text',
    size: EButtonSizes.medium,
    theme: EButtonTheme.BORDER,
  },
}

export const Border_Size_xl: Story = {
  args: {
    children: 'Text',
    size: EButtonSizes.large,
    theme: EButtonTheme.BORDER,
  },
}

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: EButtonTheme.INVERTED_COLOR,
  },
}
export const InvertedDark: Story = {
  args: {
    children: 'Text',
    theme: EButtonTheme.INVERTED_COLOR,
  },
}
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: EButtonTheme.SECONDARY,
  },
}

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: EButtonTheme.SECONDARY,
  },
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
