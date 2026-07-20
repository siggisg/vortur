import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Hero from '../sections/home/Hero';
import Whatis from '../sections/home/Whatis';
import Popup from '../components/ui/Popup';
import SEO from '../components/layout/SEO';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <>

      <SEO
        title={t("seo.aboutTitle")}
        description={t("seo.aboutDescription")}
      />

      <Helmet>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
      </Helmet>

      <Hero
        openPopup={() => setShowPopup(true)}
      />

      <Whatis />

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
      />
    </>
  );
}

export default Home;