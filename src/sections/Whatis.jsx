import '../styles/whatis.css'
import WhatisIntro from '../components/WhatisIntro'
import WhatisSwift from '../components/WhatisSwift'
import WhatisBeforeAfter from '../components/WhatisBeforeAfter'
import Whatisdifferent from '../components/WhatisDifferent'

function Whatis() {
    return (
        <section id='whatis' className="whatis">
          <WhatisIntro/>
          <WhatisSwift/>
          <WhatisBeforeAfter/>
          <Whatisdifferent/>
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