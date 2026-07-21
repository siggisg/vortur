import { useTranslation } from 'react-i18next'
import '../../styles/aboutme/about.css';

function About() {

  const { t } = useTranslation()

  return (
    <section className="about">

      <div className="about-photo">
        <img
          src="/aboutme.webp"
          alt="Ester Ósk"
          width="759"
          height="1163"
          fetchPriority="high"
        />
      </div>


      <div className="about-text">
        <h1 className="about-headline">
          {t('about.headline')}
        </h1>

        {t("about.text", { returnObjects: true }).map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>

    </section>
  );
}

export default About;