import '../styles/navbar.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

function Navbar() {
    return (
      <nav className="navbar">
        {/* LEFT */}
        <div className="navbar-logo">
          <h1>Vörtur</h1>
        </div>
  
        {/* CENTER */}
        <ul className="navbar-links">
          <li><a href="#">Heim</a></li>
          <li><a href="#">Fyrir og Eftir</a></li>
          <li><a href="#">Um mig</a></li>
          <li><a href="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8" target="_blank" rel="noopener noreferrer">Bóka núna</a></li>
        </ul>
  
        {/* RIGHT */}
        <div className="navbar-socials">
            <a href="#">
                <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/vortur.is/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
      </nav>
    )
  }
  
  export default Navbar