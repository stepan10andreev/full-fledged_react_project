import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SideBar.module.scss'
import { FC, useState } from 'react'
import { ISideBarProps } from './sideBar.interface'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'


export const SideBar: FC<ISideBarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleClick = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div className={classNames(styles.sideBar, {[styles.collapsed]: collapsed}, [className])}>
        <Button onClick={handleClick}>
            Toogle
        </Button>
        <div className={styles.switchers}>
          <ThemeSwitcher />
        </div>
    </div>
  )
}