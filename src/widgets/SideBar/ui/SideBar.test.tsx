import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from './SideBar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('SideBar', () => {
  test('render', () => {
    renderWithTranslation(<SideBar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test sidebar-toogle', () => {
    renderWithTranslation(<SideBar />)
    const TOGGLE_BTN = screen.getByTestId('sidebar-toogle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(TOGGLE_BTN)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
