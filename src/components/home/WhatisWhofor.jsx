import '../../styles/home/whatiswhofor.css';
import { useTranslation } from 'react-i18next'

function WhatisWhofor({ openPopup }) {

  const { t } = useTranslation()

  return (
    <section className="whatiswhofor">
      <h1 className="whatiswhofor-headline">
        {t('whatisWhofor.headline')}
      </h1>

      <p className="whatiswhofor-text">
        {t('whatisWhofor.text')}
      </p>

      <ul className="whatiswhofor-list">
        <li>{t('whatisWhofor.list1')}</li>

        <li>{t('whatisWhofor.list2')}</li>

        <li>{t('whatisWhofor.list3')}</li>

        <li>{t('whatisWhofor.list4')}</li>

        <li>{t('whatisWhofor.list5')}</li>
      </ul>

      <button
        className="whatiswhofor-button"
        onClick={openPopup}
      >
        {t('whatisWhofor.book')}
      </button>
    </section>
  );
}

export default WhatisWhofor;