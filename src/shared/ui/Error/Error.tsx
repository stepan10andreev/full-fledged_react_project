import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Error.module.scss'
import { FC } from 'react'
import { Text } from '../Text/Text'
import Icon from '../Icon/Icon'
import { IErrorProps } from './error.interface'
import { ETextTheme } from '../Text/text.interface'

export const Error: FC<IErrorProps> = ({ className, text }) => {
  return (
    <div className={classNames(styles.error, {}, [className])}>
      <Icon iconName='error' />

      <Text text={text} theme={ETextTheme.ERROR} />
    </div>
  )
}
