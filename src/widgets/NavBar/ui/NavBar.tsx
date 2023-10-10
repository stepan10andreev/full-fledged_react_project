import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { FC, useCallback, useState } from 'react'
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { EButtonTheme } from 'shared/ui/Button/button.interface'
import { Modal } from 'shared/ui/Modal/Modal'
import { AuthModal } from 'entities/user'

export interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { t } = useTranslation()

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <Button onClick={openModal}>{t('Login')}</Button>

      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
