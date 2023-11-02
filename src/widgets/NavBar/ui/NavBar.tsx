import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { AuthModal } from 'features/AuthByName'
import { useSelector } from 'react-redux'
import { getIsAuth, userActions } from 'entities/user'
import { useAppDispatch } from 'shared/lib/hooks'
import { EButtonSizes, EButtonTheme } from 'shared/ui/Button/button.interface'

export interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = ({ className }) => {
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const isAuth = useSelector(getIsAuth)

  const dispatch = useAppDispatch()

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const logOut = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  if (isAuth) {
    return (
      <div className={classNames(styles.navBar, {}, [className])}>
        <Button
          onClick={logOut}
          theme={EButtonTheme.INVERTED_COLOR}
          size={EButtonSizes.medium}
        >
          {t('Log out')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <Button
        onClick={openModal}
        theme={EButtonTheme.INVERTED_COLOR}
        size={EButtonSizes.medium}
      >
        {t('Log In')}
      </Button>

      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
