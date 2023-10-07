import { FC } from 'react'
import { createPortal } from 'react-dom'

export interface IPortalProps {
  children: React.ReactNode
  element?: HTMLElement
}

export const Portal: FC<IPortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element)
}
