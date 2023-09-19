import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { FC, PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'

export const enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IAppLinkProps extends PropsWithChildren, LinkProps {
  className?: string
  theme?: EAppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = ({className, children, to, theme = EAppLinkTheme.PRIMARY, ...otherProps}) => {
  return (
    <Link 
      to={to} 
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}