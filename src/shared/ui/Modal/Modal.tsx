import { createPortal } from 'react-dom'
import Icon from '../Icon/Icon'
import { FC, useCallback, useRef, useState, MouseEvent, useEffect } from 'react'
import { IModalProps } from './modal.interface'
import styles from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

const ANIMATION_DELAY = 300

export const Modal: FC<IModalProps> = ({
  nonClosing,
  isOpen,
  onClose,
  actionsOnClose,
  children,
  exitIcon,
  zIndex = 10,
  lazy,
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const clickInside = useCallback((event: MouseEvent) => {
    event.stopPropagation()
  }, [])

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const modalMods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div
        className={classNames(styles.modal, modalMods, [])}
        style={{ zIndex: isOpen ? zIndex : -10000 }}
        onClick={!nonClosing ? handleClose : undefined}
      >
        <div className={styles.overlay}>
          <div className={styles.content} onClick={clickInside}>
            {children}

            {exitIcon && (
              <button className={styles.button} onClick={handleClose}>
                <Icon iconName='cancel' />
              </button>
            )}
          </div>
        </div>
      </div>
    </Portal>
  )
}
