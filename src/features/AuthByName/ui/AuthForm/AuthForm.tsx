import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AuthForm.module.scss'
import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { EButtonTheme } from 'shared/ui/Button/button.interface'
import { useSelector, useStore } from 'react-redux'
import { authActions, authReducer } from '../../model/slice/authSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks'
import { Error } from 'shared/ui/Error/Error'
import { Text } from 'shared/ui/Text/Text'
import { ETextTheme } from 'shared/ui/Text/text.interface'
import { getAuthUsername } from '../../model/selectors/getAuthUsername/getAuthUsername'
import { getAuthPassword } from '../../model/selectors/getAuthPassword/getAuthPassword'
import { getAuthIsLoading } from '../../model/selectors/getAuthIsLoading/getAuthIsLoading'
import { getAuthError } from '../../model/selectors/getAuthError/getAuthError'
import {
  DynamicModuleLoader,
  TReducerList,
} from 'shared/lib/components/DynamicModuleLoader'

export interface IAuthFormProps {
  className?: string
}

// обьект вынесен за пределы ФК чтобы на обькт была одна и та же ссылка (на каждый рендер будет одна и та же ссылка)
const initialReducers: TReducerList = {
  authForm: authReducer,
}

const AuthForm: FC<IAuthFormProps> = memo(({ className }) => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const username = useSelector(getAuthUsername)
  const password = useSelector(getAuthPassword)
  const isLoading = useSelector(getAuthIsLoading)
  const error = useSelector(getAuthError)

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
    <DynamicModuleLoader reducers={initialReducers}>
      <form className={classNames(styles.form, {}, [className])}>
        <Text
          text={t('Authorization')}
          theme={ETextTheme.PRIMARY}
          weight={900}
        />

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
    </DynamicModuleLoader>
  )
})

export default AuthForm
