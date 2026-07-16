import '../styles/hero.css'

function Hero({ openPopup }) {
    return (
      <section className="hero">
        <div className='hero-text'>
          <h1>SWIFT meðferðin fjarlægir vörtur á fljótlegan og þægilegan hátt</h1>
          <div>
          <ul className='hero-list'>
            <li>Þrjár til fjórar meðferðir og hvert skipti tekur aðeins nokkrar mínútur</li>
            <li>Engin skurðaðgerð</li>
            <li>Flestir geta haldið áfram sínum degi strax eftir meðferð</li>
          </ul>
          <div className='hero-button-container'>
          <button className='hero-book-button' onClick={openPopup}>
                Bóka núna
            </button>
              <button
                    className="hero-more-button"
                    onClick={() =>
                    document.getElementById("whatis")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Lesa meira
              </button>
              </div>
          </div>
        </div>
        <div className='hero-img-fade'>
          <img src="/swiftvel.png" alt="Experience preview" />
        </div>
      </section>
    )
  }
  
  export default Hero

  /*
            <h1 className='hero-logo'>Vörtur</h1>
          <h1 className='hero-book'>Bóka núna</h1>
  */