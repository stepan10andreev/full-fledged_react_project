import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LanguageSwitcher.module.scss'
import { FC } from 'react'
import { ILanguageSwitcherProps } from './languageSwitcher.interface'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import RussianFlag from 'shared/assets/icons/russia-flag.svg'
import EnglandFlag from 'shared/assets/icons/england-flag.svg'
import LanguageIcog from 'shared/assets/icons/language-icon.svg'

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({className}) => {
  const { t, i18n } = useTranslation();

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  console.log(classNames(styles.languageSwitcher, {}, [className]))
  return (
    <Button onClick={switchLang} className={classNames(styles.languageSwitcher, {}, [className])}>
        <LanguageIcog/> 
        {t('Language')}
        {i18n.language === 'en' && <EnglandFlag />}
        {i18n.language === 'ru' && <RussianFlag />}
    </Button>
  )
}