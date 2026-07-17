import '../../styles/home/hero.css';

function Hero({ openPopup }) {
  const scrollToInfo = () => {
    document.getElementById('whatis')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          SWIFT meðferðin fjarlægir vörtur á fljótlegan og þægilegan hátt
        </h1>


        <ul className="hero-list">
          <li>
            Þrjár til fjórar meðferðir og hvert skipti tekur aðeins nokkrar mínútur
          </li>

          <li>
            Engin skurðaðgerð
          </li>

          <li>
            Flestir geta haldið áfram sínum degi strax eftir meðferð
          </li>
        </ul>


        <div className="hero-button-container">
          <button
            className="hero-book-button"
            onClick={openPopup}
          >
            Bóka núna
          </button>

          <button
            className="hero-more-button"
            onClick={scrollToInfo}
          >
            Lesa meira
          </button>
        </div>

      </div>


      <div className="hero-img-fade">
        <img
          src="/swiftvel.png"
          alt="SWIFT meðferðartæki"
        />
      </div>

    </section>
  );
}

export default Hero;