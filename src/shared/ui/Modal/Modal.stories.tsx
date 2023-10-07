import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam consequatur animi esse, odio, odit iure veritatis perferendis qui deleniti magnam sint quas accusamus nisi sunt incidunt omnis. Exercitationem, nesciunt?',
    isOpen: true,
  },
}

export const Dark: Story = {
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam consequatur animi esse, odio, odit iure veritatis perferendis qui deleniti magnam sint quas accusamus nisi sunt incidunt omnis. Exercitationem, nesciunt?',
    isOpen: true,
  },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
