import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { FC, useCallback, useState } from 'react'
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { EButtonTheme } from 'shared/ui/Button/button.interface'
import { Modal } from 'shared/ui/Modal/Modal'

export interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { t } = useTranslation()

  const toogleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen])

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <Button onClick={toogleModal}>{t('Login')}</Button>
      {/* // eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isModalOpen} onClose={toogleModal}>
        xxxxxxxxx
      </Modal>
    </div>
  )
}
