import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import SEO from "../components/layout/SEO";
import BeforeAndAfter from '../sections/beforeafter/BeforeAndAfter';

function BeforeAfter() {
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

      <BeforeAndAfter />
    </>
  );
}

export default BeforeAfter;