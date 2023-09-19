import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
       {t('About')}
    </div>
  )
}

export default AboutPage