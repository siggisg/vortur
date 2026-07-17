import { useState } from 'react';

import Hero from '../sections/home/Hero';
import Whatis from '../sections/home/Whatis';
import Popup from '../components/ui/Popup';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Hero
        openPopup={() => setShowPopup(true)}
      />

      <Whatis />

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
      />
    </>
  );
}

export default Home;