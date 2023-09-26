import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SideBar.module.scss'
import { FC, useState } from 'react'
import { ISideBarProps } from './sideBar.interface'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

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
      <Button data-testid='sidebar-toogle' onClick={handleClick}>
        {t('Toogle')}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
