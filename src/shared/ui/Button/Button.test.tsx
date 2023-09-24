import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { EThemeButton } from './button.interface'

describe('s', () => {
  test('with only first parameter', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('with only first parameter', () => {
    render(<Button theme={EThemeButton.GENERAL}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('general')
    screen.debug()
  })
})
