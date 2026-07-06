import '../styles/footer.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'


//<div className='footer-opening'>
//                <h3>Opnunartími</h3>
//                <p>Mán-Fös 09:00-17:00</p>
//            </div>

function Footer() {
    return (
        <footer className="footer">
            <div className='footer-content'>
            <div className='footer-info'>
            <h2>Vörtur</h2>
            <a href="tel:+3545552215">+354 555 2215</a>
    
            <a href="mailto:swiftfotamedferd@gmail.com">
            swiftfotamedferd@gmail.com
            </a>
            <p>Dalshraun 11 220, 220 Hafnarfjörður</p>
            </div>

            
    
            <div className="footer-socials">
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
            </div>
            
    
            <div className='footer-map'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.9964215054754!2d-21.945530722455615!3d64.0802566221047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60ced7e8631a3%3A0x9cd5719723070aa3!2sSnyrtistofan%20%C3%9Eema!5e0!3m2!1sis!2sdk!4v1782293925822!5m2!1sis!2sdk" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            </div>
        </footer>
      )
  }
  
  export default Footer
