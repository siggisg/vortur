import { useTranslation } from 'react-i18next'
import '../../styles/ui/popup.css';

function Popup({ isOpen, onClose, url }) {

  if (!isOpen) return null;

  const { t } = useTranslation()

  const handleContinue = () => {
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <h2 className="popup-beware">
          {t('popup.beware')}
        </h2>

        <p className="popup-beware-text">
          {t('popup.text1')}
        </p>

        <p className="popup-beware-text">
          {t('popup.text2')}
        </p>


        <div className="popup-whofor">
          <p className="popup-whofor-text">
            {t('popup.text3')}
          </p>

          <ul className="popup-whofor-list">
            <li>{t('whatisWhofor.list1')}</li>

            <li>{t('whatisWhofor.list2')}</li>

            <li>{t('whatisWhofor.list3')}</li>

            <li>{t('whatisWhofor.list4')}</li>

            <li>{t('whatisWhofor.list5')}</li>
          </ul>
        </div>


        <div className="modal-buttons">
          <button
            className="modal-button"
            onClick={handleContinue}
          >
            Bóka núna
          </button>

          <button
            className="modal-button"
            onClick={onClose}
          >
            Hætta við
          </button>
        </div>

      </div>
    </div>
  );
}

export default Popup;