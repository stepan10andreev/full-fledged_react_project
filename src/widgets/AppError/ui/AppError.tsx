import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppError.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export interface IAppErrorProps {
  className?: string
}

export const AppError: FC<IAppErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reload = () => {
    location.reload()
  }

  return (
    <div className={classNames(styles.appError, {}, [className])}>
      <p className={styles.description}>
        {' '}
        {t('An unexpected error has occurred. Try reloading the page')}
      </p>
      <button className={styles.button} onClick={reload}>
        {t('Refresh the page')}
      </button>
    </div>
  )
}
