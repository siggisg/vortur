import '../../styles/beforeafter/beforeandafter.css'
import BeforeAfterSlider from '../../components/ui/BeforeAfterSlider';

function BeforeAndAfter() {
    return (
        <section>
        <div className="beforeandafter">
        <h1 className="beforeandafter-headline">Fyrir og Eftir</h1>
        <p className="beforeandafter-text">Hér má sjá nokkrar myndir sem hafa verið teknar fyrir og eftir heillar SWIFT meðferðar. Athugið að hver meðferð er venjulega 3 - 4 skipti.</p>
        </div>

        <div className="beforeandafter-grid">
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
  
  export default BeforeAndAfter
