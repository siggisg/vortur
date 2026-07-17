import Navbar from '../components/layout/Navbar'
import Hero from '../sections/home/Hero'
import Whatis from '../sections/home/Whatis'
/*import Whofor from '../components/WhatisWhofor'*/
import Footer from '../components/layout/Footer'
import Popup from '../components/ui/Popup'
import { useState } from 'react';

function Home() {

  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Hero openPopup={() => setShowPopup(true)}/>
      <Whatis />
      <Popup
isOpen={showPopup}
onClose={() => setShowPopup(false)}
url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
/>
    </>
  )
}

export default Home



/*
<Whatis />
      <Whofor openPopup={() => setShowPopup(true)} />*/