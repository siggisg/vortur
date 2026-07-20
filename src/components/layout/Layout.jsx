import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Popup from "../ui/Popup";
import { useState } from "react";

function LanguageHandler() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang === "is" || lang === "en") {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return null;
}


function Layout() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <LanguageHandler />

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