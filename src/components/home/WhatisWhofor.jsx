import '../../styles/home/whatiswhofor.css';

function WhatisWhofor({ openPopup }) {
  return (
    <section className="whatiswhofor">
      <h1 className="whatiswhofor-headline">
        Fyrir hverja er Swift?
      </h1>

      <p className="whatiswhofor-text">
        Swift vörtumeðferð er fyrir alla nema eftirfarandi:
      </p>

      <ul className="whatiswhofor-list">
        <li>Þungaðar konur.</li>

        <li>
          Fólk með gangráð eða önnur ígrædd rafbúnaðartæki.
        </li>

        <li>
          Svæði með grun um illkynja húðbreytingar.
        </li>

        <li>Sykursjúka.</li>

        <li>
          Fólk með mjög skert ónæmiskerfi (metið af sérfræðingi).
        </li>
      </ul>

      <button
        className="whatiswhofor-button"
        onClick={openPopup}
      >
        Bóka núna
      </button>
    </section>
  );
}

export default WhatisWhofor;