import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage'

export const enum EAppRoutes {
  MAIN = '/',
  ABOUT = '/about',
}

// const RoutePath: Record<EAppRoutes, string> = {
//   [EAppRoutes.MAIN]: '/',
//   [EAppRoutes.ABOUT]: '/about',
// }

interface IRoute {
  path: EAppRoutes;
  element: JSX.Element;
}

export const routeConfig: IRoute[] = [
  {path: EAppRoutes.MAIN, element: <MainPage />},
  {path: EAppRoutes.ABOUT, element: <AboutPage />},
]