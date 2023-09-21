import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Spinner.module.scss'
import { FC } from 'react'

export interface ISpinnerProps {
  className?: string
}

export const Spinner: FC<ISpinnerProps> = ({ className }) => {
  return <div className={classNames(styles.spinner, {}, [className])}></div>
}
