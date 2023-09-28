import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SideBar.module.scss'
import { FC, useState } from 'react'
import { ISideBarProps } from './sideBar.interface'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import Icon from 'shared/ui/Icon/Icon'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { EAppLinkTheme } from 'shared/ui/AppLink/appLink.interface'
import { EAppRoutes } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home-page.svg'
import AboutIcon from 'shared/assets/icons/about-page.svg'

export const SideBar: FC<ISideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()

  const handleClick = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.sideBar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid='sidebar-toogle'
        onClick={handleClick}
        className={styles.button}
      >
        {collapsed ? (
          <Icon iconName='arrow' rotateDegrees={180} size={40} />
        ) : (
          <Icon iconName='arrow' size={40} />
        )}
      </Button>

      <nav className={styles.nav}>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={EAppRoutes.MAIN}
          className={styles.navLink}
        >
          <HomeIcon className={styles.homeIcon} />
          <span className={styles.linkText}> {t('Home')}</span>
        </AppLink>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={EAppRoutes.ABOUT}
          className={styles.navLink}
        >
          <AboutIcon className={styles.aboutIcon} />
          <span className={styles.linkText}>{t('About')}</span>
        </AppLink>
      </nav>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  )
}
