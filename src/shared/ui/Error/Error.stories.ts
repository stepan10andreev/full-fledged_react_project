import type { Meta, StoryObj } from '@storybook/react'

import { Error } from './Error'

const meta = {
  title: 'shared/Error',
  component: Error,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorText: Story = {
  args: {
    text: 'ERROR ERROR',
  },
}
