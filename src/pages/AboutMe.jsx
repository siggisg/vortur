import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import About from '../sections/aboutme/About';
import SEO from "../components/layout/SEO";

function AboutMe() {
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

      <About />
    </>
  );
}

export default AboutMe;