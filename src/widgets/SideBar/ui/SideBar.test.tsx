import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from './SideBar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent/renderTestComponent'

describe('SideBar', () => {
  test('render', () => {
    renderTestComponent(<SideBar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test sidebar-toogle', () => {
    renderTestComponent(<SideBar />)
    const TOGGLE_BTN = screen.getByTestId('sidebar-toogle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(TOGGLE_BTN)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
