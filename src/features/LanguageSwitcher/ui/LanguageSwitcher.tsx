import { classNames } from 'shared/lib/classNames/classNames'
import { FC } from 'react'
import { ILanguageSwitcherProps } from './languageSwitcher.interface'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import RussianFlag from 'shared/assets/icons/russia-flag.svg'
import EnglandFlag from 'shared/assets/icons/england-flag.svg'
import LanguageIcog from 'shared/assets/icons/language-icon.svg'
import styles from './LanguageSwitcher.module.scss'

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({
  className,
  short,
}) => {
  const { t, i18n } = useTranslation()

  const switchLang = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      onClick={switchLang}
      className={classNames(styles.languageSwitcher, {}, [className])}
    >
      <LanguageIcog />

      {t(short ? '' : 'Language')}

      {i18n.language === 'en' && <EnglandFlag />}

      {i18n.language === 'ru' && <RussianFlag />}
    </Button>
  )
}
