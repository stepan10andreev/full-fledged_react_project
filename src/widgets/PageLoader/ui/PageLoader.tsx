import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { FC } from 'react'
import { Spinner } from 'shared/ui/Spinner/Spinner'

export interface IPageLoaderProps {
  className?: string
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Spinner />
    </div>
  )
}
