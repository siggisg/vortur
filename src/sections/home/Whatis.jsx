import { useState } from 'react';

import Popup from '../../components/ui/Popup';
import WhatisBeforeAfter from '../../components/home/WhatisBeforeAfter';
import WhatisDifferent from '../../components/home/WhatisDifferent';
import WhatisIntro from '../../components/home/WhatisIntro';
import WhatisSwift from '../../components/home/WhatisSwift';
import WhatisWhofor from '../../components/home/WhatisWhofor';

import '../../styles/home/whatis.css';

function Whatis() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section
      id="whatis"
      className="whatis"
    >
      <WhatisIntro />

      <WhatisSwift />

      <WhatisBeforeAfter />

      <WhatisDifferent />

      <WhatisWhofor
        openPopup={openPopup}
      />


      <Popup
        isOpen={showPopup}
        onClose={closePopup}
        url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
      />
    </section>
  );
}

export default Whatis;