import { DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

interface IRenderTestComponentOptions {
  route?: string
  initialState: DeepPartial<StoreSchema>
}
export function renderTestComponent(
  component: ReactNode,
  options: IRenderTestComponentOptions = { route: '/', initialState: {} }
) {
  return render(
    <StoreProvider initialState={options.initialState}>
      <MemoryRouter initialEntries={[options.route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
