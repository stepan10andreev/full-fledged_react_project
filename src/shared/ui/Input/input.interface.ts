import { InputHTMLAttributes } from 'react'
import { TTextTags } from 'shared/lib/types'

type THTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

export interface IInputProps extends THTMLInputProps {
  className?: string
  headingText?: string
  HeadingTag?: TTextTags
  onChange?: (value: string) => void
}
