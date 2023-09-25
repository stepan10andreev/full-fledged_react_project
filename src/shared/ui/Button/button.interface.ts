import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const enum EThemeButton {
  GENERAL = 'general',
  BORDER = 'border',
}
export interface IButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EThemeButton
}
