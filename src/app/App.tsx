import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks'
import { userActions } from 'entities/user'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initUserData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback='...loading'>
        <NavBar />
        <div className='app-content'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
