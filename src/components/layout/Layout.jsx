import { Navigate, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Popup from "../ui/Popup";
import StructuredData from "./StructuredData";

function Layout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const supportedLanguages = ["is", "en"];
  const isValidLanguage = supportedLanguages.includes(lang);

  useEffect(() => {
    if (isValidLanguage && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, isValidLanguage]);

  if (!isValidLanguage) {
    return <Navigate to="/is" replace />;
  }

  return (
    <>
      <StructuredData />

      <Navbar openPopup={() => setShowPopup(true)} />

      <main>
        <Outlet />
      </main>

      <Footer />

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
      />
    </>
  );
}

export default Layout;