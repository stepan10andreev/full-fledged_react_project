import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const enum EButtonTheme {
  INVERTED_COLOR = 'inverted-color',
  BORDER = 'border',
}

export const enum EButtonBackground {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
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
