import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import { ChangeEventHandler, FC, memo, useEffect, useMemo, useRef } from 'react'
import { IInputProps } from './input.interface'

export const Input: FC<IInputProps> = memo(
  ({
    className,
    headingText,
    HeadingTag = 'h4',
    type = 'text',
    value,
    onChange,
    autoFocus,
    ...otherProps
  }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
      onChange?.(event.target.value)
    }

    const heading = useMemo(() => {
      return headingText && <HeadingTag>{headingText}</HeadingTag>
    }, [HeadingTag, headingText])

    useEffect(() => {
      if (autoFocus) {
        console.log('here')
        inputRef.current.focus()
      }
    }, [autoFocus])

    return (
      <label className={classNames(styles.label, {}, [className])}>
        {heading}

        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.input}
          ref={inputRef}
          {...otherProps}
        />
      </label>
    )
  }
)
