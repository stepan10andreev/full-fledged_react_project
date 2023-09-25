import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { FC } from 'react'
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

export interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={EAppLinkTheme.SECONDARY} to={'/'}>
          {t('Home')}
        </AppLink>
        <AppLink theme={EAppLinkTheme.PRIMARY} to={'/about'}>
          {t('About')}
        </AppLink>
      </div>
    </div>
  )
}
