import BeforeAfterSlider from '../../components/ui/BeforeAfterSlider';

import '../../styles/beforeafter/beforeandafter.css';

function BeforeAndAfter() {
  const images = [
    {
      before: '/1 fyrir.jpg',
      after: '/1 eftir.jpg',
    },
    {
      before: '/2 fyrir.jpg',
      after: '/2 eftir.jpg',
    },
    {
      before: '/3 fyrir.jpg',
      after: '/3 eftir.jpg',
    },
    {
      before: '/4 fyrir.jpg',
      after: '/4 eftir.jpg',
    },
  ];

  return (
    <section>
      <div className="beforeandafter">
        <h1 className="beforeandafter-headline">
          Fyrir og Eftir
        </h1>

        <p className="beforeandafter-text">
          Hér má sjá nokkrar myndir sem hafa verið teknar fyrir og eftir
          heillar SWIFT meðferðar. Athugið að hver meðferð er venjulega
          3 - 4 skipti.
        </p>
      </div>


      <div className="beforeandafter-grid">
        {images.map((image, index) => (
          <BeforeAfterSlider
            key={index}
            beforeImage={image.before}
            afterImage={image.after}
          />
        ))}
      </div>
    </section>
  );
}

export default BeforeAndAfter;