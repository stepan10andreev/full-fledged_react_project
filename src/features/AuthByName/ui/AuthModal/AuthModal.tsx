import { FC, Suspense } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { IAuthModalProps } from './authForm.interface'
import { AuthFormAsync } from '../AuthForm/AuthFormAsync'
import { Spinner } from 'shared/ui/Spinner/Spinner'

export const AuthModal: FC<IAuthModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Spinner />}>
        <AuthFormAsync />
      </Suspense>
    </Modal>
  )
}
