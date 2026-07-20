import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { FaBars, FaFacebookF, FaInstagram, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import '../../styles/layout/navbar.css';

function Navbar({ openPopup }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  const switchLanguage = () => {
    const newLanguage = lang === "is" ? "en" : "is";
  
    navigate(
      location.pathname.replace(`/${lang}`, `/${newLanguage}`)
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">

        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>


        <div className="navbar-logo">
          <Link to={`/${lang}`}>
            <div className="logo-container">
              <img src="/vorturlogo.svg" alt="Logo" />
            </div>
          </Link>
        </div>


        <ul className="navbar-links">
          <li>
            <Link to={`/${lang}`}>
              {t('navbar.link1')}
            </Link>
          </li>

          <li>
            <Link to={`/${lang}/fyrir-og-eftir`}>
              {t('navbar.link2')}
            </Link>
          </li>

          <li>
            <Link to={`/${lang}/about-me`}>
              {t('navbar.link3')}
            </Link>
          </li>

          <li>
            <button onClick={openPopup}>
              {t('navbar.bookDesktop')}
            </button>
          </li>
        </ul>


        <div className="navbar-socials">

        <button
          className="navbar-language-button"
          onClick={switchLanguage}
        >
          {lang === "is" ? (
            <img 
              src="/flags/Flag_of_the_United_Kingdom.svg" 
              alt="English" 
            />
          ) : (
            <img 
              src="/flags/Flag_of_Iceland.svg" 
              alt="Íslenska" 
            />
          )}
        </button>

          <a
            href="https://www.facebook.com/profile.php?id=61590005321231&sk=about&locale=is_IS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/vortur.is/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>


        <button
          className="book-btn-mobile"
          onClick={openPopup}
        >
          {t('navbar.bookMobile')}
        </button>

      </nav>


      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
        />
      )}


      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>

        <button
          className="close-menu"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>


        <Link to={`/${lang}`} onClick={closeMenu}>
          {t('navbar.link1')}
        </Link>

        <Link to={`/${lang}/fyrir-og-eftir`} onClick={closeMenu}>
          {t('navbar.link2')}
        </Link>

        <Link to={`/${lang}/about-me`} onClick={closeMenu}>
          {t('navbar.link3')}
        </Link>

        <button
          className="navbar-language-button"
          onClick={() => {
            closeMenu();
            switchLanguage();
          }}
        >
          {lang === "is" ? (
            <img 
              src="/flags/Flag_of_the_United_Kingdom.svg" 
              alt="English" 
            />
          ) : (
            <img 
              src="/flags/Flag_of_Iceland.svg" 
              alt="Íslenska" 
            />
          )}
        </button>

        <a
          href="https://www.facebook.com/profile.php?id=61590005321231&sk=about&locale=is_IS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/vortur.is/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

      </div>
    </>
  );
}

export default Navbar;