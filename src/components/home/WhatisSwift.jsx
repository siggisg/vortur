import '../../styles/home/whatisswift.css';
import { useTranslation } from 'react-i18next'

function WhatIsSwift() {

  const { t } = useTranslation()

  return (
    <div className="whatisswift">
      <h1 className="whatisswift-headline">
        {t('whatisSwift.headline')}
      </h1>

      <p className="whatisswift-text-1">
        {t('whatisSwift.text1')}
      </p>

      <p className="whatisswift-text-2">
        {t('whatisSwift.text2')}
      </p>
    </div>
  );
}

export default WhatIsSwift;