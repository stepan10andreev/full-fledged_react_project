import { PropsWithChildren } from 'react'
import { LinkProps } from 'react-router-dom'

export const enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IAppLinkProps extends PropsWithChildren, LinkProps {
  className?: string
  theme?: EAppLinkTheme
}
