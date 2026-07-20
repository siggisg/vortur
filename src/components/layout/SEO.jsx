import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function SEO({ title, description }) {
  const location = useLocation();

  const currentPath = location.pathname.replace(/^\/(is|en)/, "");

  return (
    <Helmet>
      <title>{title}</title>

      <meta 
        name="description" 
        content={description} 
      />

      <link
        rel="alternate"
        hrefLang="is"
        href={`https://vortur.is/is${currentPath}`}
      />

      <link
        rel="alternate"
        hrefLang="en"
        href={`https://vortur.is/en${currentPath}`}
      />

      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://vortur.is/is${currentPath}`}
      />
    </Helmet>
  );
}

export default SEO;