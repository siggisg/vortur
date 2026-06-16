import '../styles/footer.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <h2>Vörtur</h2>
            <a href="tel:+3541234567">+354 123 4567</a>
    
            <a href="mailto:hello@email.is">
                hello@email.is
            </a>
    
            <div className="footer-socials">
                <a href="#">
                    <FaFacebookF />
                </a>

                <a href="#">
                    <FaInstagram />
                </a>
            </div>
    
            <p>© 2026 Vörtur</p>
        </footer>
      )
  }
  
  export default Footer
