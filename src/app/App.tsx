import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

const App = () => {
  const { theme } = useTheme()
  
  return (
      <div className={classNames('app', {}, [theme])}>
        <NavBar />
        <div className='app-content'>
          <SideBar />
          <AppRouter />
        </div>
      </div>
  )
}

export default App;