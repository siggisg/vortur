import '../../styles/home/hero.css';
import { useTranslation } from 'react-i18next'

function Hero({ openPopup }) {

  const { t } = useTranslation()

  const scrollToInfo = () => {
    document.getElementById('whatis')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          {t('hero.headline')}
        </h1>


        <ul className="hero-list">
          <li>{t('hero.list1')}</li>

          <li>{t('hero.list2')}</li>

          <li>{t('hero.list3')}</li>
        </ul>


        <div className="hero-button-container">
          <button
            className="hero-book-button"
            onClick={openPopup}
          >
            {t('hero.book')}
          </button>

          <button
            className="hero-more-button"
            onClick={scrollToInfo}
          >
            {t('hero.more')}
          </button>
        </div>

      </div>


      <div className="hero-img-fade">
        <img
          src="/swiftvel.webp"
          alt="SWIFT meðferðartæki"
        />
      </div>

    </section>
  );
}

export default Hero;