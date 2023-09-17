import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import './styles/index.scss';

const App = () => {
  const {theme, switchTheme} = useTheme()
  
  return (
      <div className={classNames('app', {}, [theme])}>
        <button onClick={switchTheme}>Switch Theme</button>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={'...Loading'}>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
          </Routes>
        </Suspense>
      </div>
  )
}

export default App;