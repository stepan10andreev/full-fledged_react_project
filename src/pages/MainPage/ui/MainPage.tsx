import { BugButton } from 'app/providers/ErrorBoundary'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      {/* <BugButton /> */}
      {t('Home')}
    </div>
  )
}

export default MainPage
