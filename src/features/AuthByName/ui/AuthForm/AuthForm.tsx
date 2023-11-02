import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AuthForm.module.scss'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { EButtonTheme } from 'shared/ui/Button/button.interface'
import { useSelector } from 'react-redux'
import { authActions } from '../../model/slice/authSlice'
import { getAuthState } from '../../model/selectors/getAuthState/getAuthState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks'
import { Error } from 'shared/ui/Error/Error'
import { Text } from 'shared/ui/Text/Text'
import { ETextTheme } from 'shared/ui/Text/text.interface'

export interface IAuthFormProps {
  className?: string
}

export const AuthForm: FC<IAuthFormProps> = memo(({ className }) => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const { username, password, isLoading, error } = useSelector(getAuthState)

  const changeUsername = useCallback(
    (value: string) => {
      dispatch(authActions.setUsername(value))
    },
    [dispatch]
  )

  const changePassword = useCallback(
    (value: string) => {
      dispatch(authActions.setPassword(value))
    },
    [dispatch]
  )

  const logIn = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <form className={classNames(styles.form, {}, [className])}>
      <Text text={t('Authorization')} theme={ETextTheme.PRIMARY} weight={900} />

      <Input
        type='text'
        placeholder={t('Enter username')}
        value={username}
        onChange={changeUsername}
        autoFocus
      />
      <Input
        type='text'
        placeholder={t('Enter password')}
        value={password}
        onChange={changePassword}
      />
      <Button
        theme={EButtonTheme.SECONDARY}
        onClick={logIn}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>

      {error && <Error text={t('Incorrect username or password')} />}
    </form>
  )
})
