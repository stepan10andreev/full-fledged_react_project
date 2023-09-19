import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { FC } from 'react'
import { IButtonProps } from './button.interface'


export const Button: FC<IButtonProps> = ({ className , children, theme, ...otherProps}) => {
  return (
    <button 
      className={classNames(styles.button, {}, [styles[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}