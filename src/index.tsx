import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { AppError } from 'widgets/AppError/ui/AppError'
import { Suspense } from 'react'

const container = document.getElementById('app-root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <ErrorBoundary
      fallback={
        <Suspense fallback={'...loading'}>
          <AppError />
        </Suspense>
      }
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
