import { FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { AuthForm } from '../AuthForm/AuthForm'
import { IAuthModalProps } from './authForm.interface'

export const AuthModal: FC<IAuthModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <AuthForm />
    </Modal>
  )
}
