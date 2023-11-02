import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'
import { FC } from 'react'
import { ITextProps } from './text.interface'

export const Text: FC<ITextProps> = ({
  className,
  As = 'p',
  text,
  theme,
  color,
  weight,
  children,
}) => {
  const extraClassnames = [
    styles[`w${weight}`],
    styles[theme],
    styles[color],
    className,
  ]

  return (
    <As className={classNames(styles.text, {}, extraClassnames)}>
      {text}

      {children}
    </As>
  )
}
