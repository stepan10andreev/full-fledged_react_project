import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import './global.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter >
      <div className='app'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>

        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;