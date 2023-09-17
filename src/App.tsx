import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const {theme, switchTheme} = useTheme()
  
  return (
      <div className={classNames('app', {}, [theme])}>
        <button onClick={switchTheme}>Switch Theme</button>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={'...Loading'}>
          <Routes>
            <Route path="/" element={<MainPageAsync />}/>
            <Route path="/about" element={<AboutPageAsync />}/>
          </Routes>
        </Suspense>
      </div>
  )
}

export default App;