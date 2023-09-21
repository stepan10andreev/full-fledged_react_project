import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const NotFoundPage: FC = () => {
  const { t } = useTranslation()

  return <div className={styles.notFoundPage}>{t('Page not found')}</div>
}
