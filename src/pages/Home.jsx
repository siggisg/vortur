import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Whatis from '../sections/Whatis'
import Whofor from '../sections/Whofor'
import Footer from '../components/Footer'
import Popup from '../components/Popup'
import { useState } from 'react';

function Home() {

  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Hero openPopup={() => setShowPopup(true)}/>
      <Whatis />
      <Whofor openPopup={() => setShowPopup(true)} />
      <Popup
isOpen={showPopup}
onClose={() => setShowPopup(false)}
url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
/>
    </>
  )
}

export default Home



