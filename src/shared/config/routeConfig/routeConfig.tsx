import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export const enum EAppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '*',
}

// const RoutePath: Record<EAppRoutes, string> = {
//   [EAppRoutes.MAIN]: '/',
//   [EAppRoutes.ABOUT]: '/about',
// }

interface IRoute {
  path: EAppRoutes
  element: JSX.Element
}

export const routeConfig: IRoute[] = [
  { path: EAppRoutes.MAIN, element: <MainPage /> },
  { path: EAppRoutes.ABOUT, element: <AboutPage /> },
  { path: EAppRoutes.NOT_FOUND, element: <NotFoundPage /> },
]
