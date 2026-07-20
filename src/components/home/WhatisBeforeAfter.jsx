import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


import '../../styles/home/whatisbeforeafter.css';

function WhatIsBeforeAfter() {

  const { t } = useTranslation()

  return (
    <div className="whatisbeforeafter">
      <div className="whatisbeforeafter-image">
        <img src="/fyrir.webp" alt="Experience preview" />
        <img src="/eftir.webp" alt="Experience preview" />
      </div>

      <div className="whatisbeforeafter-linktopage">
        <p className="whatisbeforeafter-text">
        {t('whatisBeforeAfter.text')}{' '}
          <Link
            to="/fyrir-og-eftir"
            className="whatisbeforeafter-link"
          >
            {t('whatisBeforeAfter.link')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default WhatIsBeforeAfter;