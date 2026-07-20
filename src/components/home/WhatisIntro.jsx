import '../../styles/home/whatisintro.css';
import { useTranslation } from 'react-i18next'

function WhatIsIntro() {

  const { t } = useTranslation()

  return (
    <div className="whatisintro">
      <h1 className="whatisintro-headline">
        {t('whatisIntro.headline')}
      </h1>

      <p className="whatisintro-text">
        {t('whatisIntro.text1')}
      </p>

      <p className="whatisintro-text">
        {t('whatisIntro.text2')}
      </p>
    </div>
  );
}

export default WhatIsIntro;