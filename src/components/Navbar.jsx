import '../styles/navbar.css'
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from "react";
//import vorturlogo from '/public/vorturlogo.svg'

//<Link to="/">
//            <h1 className='navbar-logo-text'>Vörtur</h1>
//          </Link>


function Navbar({ openPopup }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* HAMBURGER (mobile only via CSS) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* LEFT */}
        <div className="navbar-logo">
          <Link to="/">
            <div className="logo-container">
            <img src="/vorturlogo.svg" alt="Logo" />
            </div>
          </Link>
          
        </div>

        {/* CENTER */}
        <ul className="navbar-links">
          <li><Link to="/">Heim</Link></li>
          <li><Link to="/fyrir-og-eftir">Fyrir og Eftir</Link></li>
          <li><Link to="/about-me">Um mig</Link></li>
          <li><a onClick={openPopup}>Bóka núna</a></li>
        </ul>

        {/* RIGHT */}
        <div className="navbar-socials">
        <a 
          href="https://www.facebook.com/profile.php?id=61590005321231&sk=about&locale=is_IS"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/vortur.is/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <a className="book-btn-mobile" onClick={openPopup}>
          Bóka
        </a>
      </nav>
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)}>Heim</Link>
        <Link to="/fyrir-og-eftir" onClick={() => setMenuOpen(false)}>Fyrir og Eftir</Link>
        <Link to="/about-me" onClick={() => setMenuOpen(false)}>Um mig</Link>
        
        <a 
          href="https://www.facebook.com/profile.php?id=61590005321231&sk=about&locale=is_IS"
          target="_blank"
          rel="noopener noreferrer">
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
  )
}

export default Navbar