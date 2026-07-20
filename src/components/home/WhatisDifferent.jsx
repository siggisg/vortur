import '../../styles/home/whatisdifferent.css';
import { useTranslation } from 'react-i18next'

function WhatIsDifferent() {

  const { t } = useTranslation()

  return (
    <div className="whatisdifferent">
      <h1 className="whatisdifferent-headline">
        {t('whatisDifferent.headline')}
      </h1>

      <p className="whatisdifferent-text-1">
        {t('whatisDifferent.text')}
      </p>

      <ul className="whatisdifferent-list">
        <li>{t('whatisDifferent.list1')}</li>

        <li>{t('whatisDifferent.list2')}</li>

        <li>{t('whatisDifferent.list3')}</li>

        <li>{t('whatisDifferent.list4')}</li>

        <li>{t('whatisDifferent.list5')}</li>

        <li>{t('whatisDifferent.list6')}</li>
      </ul>
    </div>
  );
}

export default WhatIsDifferent;