import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { FC } from 'react'
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

export interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = ({className}) => {
  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={EAppLinkTheme.SECONDARY} to={'/'}>Home</AppLink>
        <AppLink theme={EAppLinkTheme.PRIMARY} to={'/about'}>About</AppLink>
      </div>
    </div>
  )
}

