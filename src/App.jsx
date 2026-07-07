import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Popup from './components/Popup';

import Home from './pages/Home'
import BeforeAfter from './pages/BeforeAfter'
import AboutMe from './pages/AboutMe';
import { Analytics } from "@vercel/analytics/react";

function App() {

  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
    <div className='app'>
      <Navbar openPopup={() => setShowPopup(true)} />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fyrir-og-eftir" element={<BeforeAfter />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      </main>

      <Footer />
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
      />
      <Analytics />
    </div>
    </>
  )
}

export default App










/*import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Whatis from './sections/Whatis'
import Whofor from './sections/Whofor'
import Aboutme from './sections/Aboutme'
import Footer from './components/Footer'
import Popup from './components/Popup'
import { useState } from 'react';

function App() {

  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar openPopup={() => setShowPopup(true)} />
      <Hero />
      <Whatis />
      <Whofor openPopup={() => setShowPopup(true)} />
      <Footer />
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  )
}

export default App*/