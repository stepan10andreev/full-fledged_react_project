import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './global.scss';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { Suspense } from 'react';

const App = () => {
  return (
    <BrowserRouter >
      <div className='app'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={'...Loading'}>
          <Routes>
            <Route path="/" element={<MainPageAsync />}/>
            <Route path="/about" element={<AboutPageAsync />}/>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App;