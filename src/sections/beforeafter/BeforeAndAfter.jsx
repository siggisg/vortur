import BeforeAfterSlider from '../../components/ui/BeforeAfterSlider';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { useTranslation } from 'react-i18next'

import '../../styles/beforeafter/beforeandafter.css';

function BeforeAndAfter() {

  const { t } = useTranslation()
  const images = [
    {
      before: '/1 fyrir.jpg',
      after: '/1 eftir.jpg',
    },
    {
      before: '/2 fyrir.jpg',
      after: '/2 eftir.jpg',
    },
    {
      before: '/3 fyrir.jpg',
      after: '/3 eftir.jpg',
    },
    {
      before: '/4 fyrir.jpg',
      after: '/4 eftir.jpg',
    },
  ];

  return (
    <section>
      <div className="beforeandafter">
        <h1 className="beforeandafter-headline">
          {t('beforeAfter.headline')}
        </h1>

        <p className="beforeandafter-text">
          {t('beforeAfter.text')}
        </p>
      </div>


      <div className="beforeandafter-grid">
        {images.map((image, index) => (
          <ScrollReveal key={index}>
            <BeforeAfterSlider
              beforeImage={image.before}
              afterImage={image.after}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default BeforeAndAfter;