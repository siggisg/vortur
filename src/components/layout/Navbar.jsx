import { useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../../styles/layout/navbar.css';

function Navbar({ openPopup }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/">
            <div className="logo-container">
              <img src="/vorturlogo.svg" alt="Logo" />
            </div>
          </Link>
        </div>


        <ul className="navbar-links">
          <li>
            <Link to="/">Heim</Link>
          </li>

          <li>
            <Link to="/fyrir-og-eftir">
              Fyrir og Eftir
            </Link>
          </li>

          <li>
            <Link to="/about-me">
              Um mig
            </Link>
          </li>

          <li>
            <button onClick={openPopup}>
              Bóka núna
            </button>
          </li>
        </ul>


        <div className="navbar-socials">
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
          Bóka
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


        <Link to="/" onClick={closeMenu}>
          Heim
        </Link>

        <Link to="/fyrir-og-eftir" onClick={closeMenu}>
          Fyrir og Eftir
        </Link>

        <Link to="/about-me" onClick={closeMenu}>
          Um mig
        </Link>


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