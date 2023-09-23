import { classNames } from 'shared/lib/classNames/classNames'
import { FC, useEffect, useState } from 'react'

export const BugButton: FC = () => {
  const [error, setError] = useState(false)

  const pushError = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error('hhhv')
    }
  }, [error])

  return (
    <button
      onClick={pushError}
      // eslint-disable-next-line i18next/no-literal-string
    >
      Error
    </button>
  )
}
