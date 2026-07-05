import BeforeAfterSlider from '../components/BeforeAfterSlider';
import '../styles/beforeafter.css'


function BeforeAfter() {
    return (
      <section>
        <div className="beforeafter">
        <h1 className="beforeafter-headline">Fyrir og Eftir</h1>
        <p className="beforeafter-text">Hér má sjá nokkrar myndir sem hafa verið teknar fyrir og eftir heillar SWIFT meðferðar. Athugið að hver meðferð er venjulega 3 - 4 skipti.</p>
        </div>

        <div className="beforeafter-grid">
        <BeforeAfterSlider
        beforeImage="/1 fyrir.jpg"
        afterImage="/1 eftir.jpg"
      />

      <BeforeAfterSlider
        beforeImage="/2 fyrir.jpg"
        afterImage="/2 eftir.jpg"
      />

      <BeforeAfterSlider
        beforeImage="/3 fyrir.jpg"
        afterImage="/3 eftir.jpg"
      />

      <BeforeAfterSlider
        beforeImage="/4 fyrir.jpg"
        afterImage="/4 eftir.jpg"
      />
      </div>
      </section>
    )
  }
  
  export default BeforeAfter