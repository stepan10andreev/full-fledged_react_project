import { PropsWithChildren } from 'react'

export type TWeight = 900 | 700 | 600 | 500 | 400 | 300

export enum ETextColor {
  BLACK = 'black',
}

export enum ETextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

export interface ITextProps extends PropsWithChildren {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'
  text: string
  theme?: ETextTheme
  color?: ETextColor
  weight?: TWeight
  className?: string
}
