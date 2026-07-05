import '../styles/popup.css'

function Popup({ isOpen, onClose, url }) {
    if (!isOpen) return null;
  
    const handleContinue = () => {
      //window.open(url, '_blank');
      window.open(url, '_blank');
      onClose();
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2 className='popup-beware'>Athugið</h2>
          <p className='popup-beware-text'>
            Oftast þarf 3-4 meðferðir og borgað er fyrir hverja meðferð fyrir sig hverju sinni.
          </p>

          <p className='popup-beware-text'>
            Fólk sem notar heyrnatæki þarf að fjarlægja þau fyrir meðferðina.
          </p>
  


          <div className="popup-whofor">
            <p className='popup-whofor-text'>Swift vörtumeðferð er fyrir alla nema eftirfarandi:</p>
            <ul className='popup-whofor-list'>
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

        </div>






  
          <div className="modal-buttons">
          <button className='modal-button' onClick={handleContinue}>Bóka núna</button>
            <button className='modal-button' onClick={onClose}>Hætta við</button>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Popup;