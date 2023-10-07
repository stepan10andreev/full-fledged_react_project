import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { EButtonTheme } from './button.interface'

describe('s', () => {
  test('with only first parameter', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('with only first parameter', () => {
    render(<Button theme={EButtonTheme.INVERTED_COLOR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('inverted-color')
    screen.debug
  })
})
