import '../styles/whofor.css'

import { useState } from 'react';
import Popup from '../components/Popup';

function Whofor({ openPopup }) {

  //const [showPopup, setShowPopup] = useState(false);

    return (
        <section className="whofor">
            <h1 className='whofor-headline'>Fyrir hverja er Swift?</h1>
            <p className='whofor-text'>Swift vörtumeðferð er fyrir alla nema eftirfarandi:</p>
            <ul className='whofor-list'>
  <li>
  Þungaðar konur.
  </li>

  <li>Fólk með gangráð eða önnur ígrædd rafbúnaðartæki.</li>
  <li>Svæði með grun um illkynja húðbreytingar.</li>

  <li>
    Sykursjúka.
  </li>

  <li>Fólk með mjög skert ónæmiskerfi (metið af sérfræðingi).</li>
</ul>
            <button className='whofor-button' onClick={openPopup}>
                Bóka núna
            </button>

        </section>
      )
  }
  
  export default Whofor
