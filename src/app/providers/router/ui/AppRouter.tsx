import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<div className='page-container'>{route.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
