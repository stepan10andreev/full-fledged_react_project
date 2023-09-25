import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EAppLinkTheme, IAppLinkProps } from './appLink.interface'

export const AppLink: FC<IAppLinkProps> = ({
  className,
  children,
  to,
  theme = EAppLinkTheme.PRIMARY,
  ...otherProps
}) => {
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
export { EAppLinkTheme }
