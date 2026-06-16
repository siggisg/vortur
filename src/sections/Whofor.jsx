import '../styles/whofor.css'

import { useState } from 'react';
import Popup from '../components/Popup';

function Whofor() {

  const [showPopup, setShowPopup] = useState(false);

    return (
        <section className="whofor">
            <h1 className='whofor-headline'>Hverjir ættu ekki að fara í Swift meðferð?</h1>
            <p className='whofor-text'>Meðferðin hentar ekki öllum og ekki er mælt með henni fyrir eftirfarandi:</p>
            <ul className='whofor-list'>
  <li>
  Þungaðar konur.
  </li>

  <li>Fólk með gangráð eða önnur ígrædd rafbúnaðartæki
  Svæði með grun um illkynja húðbreytingar.</li>

  <li>
    Sykursjúka.
  </li>

  <li>Fólk með mjög skert ónæmiskerfi (metið af sérfræðingi).</li>
</ul>
            <button className='whofor-button' onClick={() => setShowPopup(true)}>
                Bóka núna
            </button>

            <Popup
              isOpen={showPopup}
              onClose={() => setShowPopup(false)}
              url="https://noona.is/tema/experience/15FZOaYlpcwh3VJluSbewHW8"
            />
        </section>
      )
  }
  
  export default Whofor
