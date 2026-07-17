import '../../styles/home/whatis.css'
import WhatisIntro from '../../components/home/WhatisIntro'
import WhatisSwift from '../../components/home/WhatisSwift'
import WhatisBeforeAfter from '../../components/home/WhatisBeforeAfter'
import Whatisdifferent from '../../components/home/WhatisDifferent'
import WhatisWhofor from '../../components/home/WhatisWhofor'
import Popup from '../../components/ui/Popup'
import { useState } from 'react';

function Whatis() {
  const [showPopup, setShowPopup] = useState(false);
    return (
        <section id='whatis' className="whatis">
          <WhatisIntro/>
          <WhatisSwift/>
          <WhatisBeforeAfter/>
          <Whatisdifferent/>
          <WhatisWhofor openPopup={() => setShowPopup(true)}/>
          <Popup
isOpen={showPopup}
onClose={() => setShowPopup(false)}
url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
/>
        </section>
      )
  }
  
  export default Whatis





  /*function Whatis() {
    return (
        <section className="whatis">
          <WhatisIntro/>
          <div className="whatis-image">
            <img src="/swiftvel.webp" alt="Experience preview" />
          </div>
        </section>
      )
  }
  
  export default Whatis*/