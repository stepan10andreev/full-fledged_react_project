export interface IModalProps {
  nonClosing?: boolean
  isOpen: boolean
  onClose?: () => void
  actionsOnClose?: () => void
  children: React.ReactNode
  exitIcon?: boolean
  zIndex?: number
  lazy?: boolean
}
