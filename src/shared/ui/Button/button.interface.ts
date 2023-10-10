import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const enum EButtonTheme {
  PRIMARY = 'primary',
  INVERTED_COLOR = 'inverted-color',
  SECONDARY = 'secondary',
  BORDER = 'border',
}

export const enum EButtonBackground {
  BACKGROUND_PRIMARY = 'background-primary',
  BACKGROUND_INVERTED = 'background-inverted',
  BACKGROUND_SECONDARY = 'background-secondary',
}

export const enum EButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface IButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EButtonTheme
  size?: EButtonSizes
  background?: EButtonBackground
}
