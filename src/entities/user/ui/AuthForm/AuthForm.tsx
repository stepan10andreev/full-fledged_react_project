import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AuthForm.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import {
  EButtonBackground,
  EButtonTheme,
} from 'shared/ui/Button/button.interface'

export interface IAuthFormProps {
  className?: string
}

export const AuthForm: FC<IAuthFormProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <form className={classNames(styles.form, {}, [className])}>
      <Input type='text' placeholder={t('Enter username')} autoFocus />
      <Input type='text' placeholder={t('Enter password')} />
      <Button theme={EButtonTheme.SECONDARY}>{t('Login')}</Button>
    </form>
  )
}
