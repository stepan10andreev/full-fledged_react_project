import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { FC } from 'react'
import { IButtonProps } from './button.interface'

export const Button: FC<IButtonProps> = ({
  className = '',
  children,
  theme,
  background,
  size,
  ...otherProps
}) => {
  // const mods = {}

  const extraClassnames = [
    styles[theme],
    styles[size],
    styles[background],
    className,
  ]

  return (
    <button
      className={classNames(styles.button, {}, extraClassnames)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
