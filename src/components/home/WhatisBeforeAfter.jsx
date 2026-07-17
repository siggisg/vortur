import '../../styles/home/whatisbeforeafter.css'
import { Link } from 'react-router-dom';


function whatisbeforeafter() {


    return (
      <div className='whatisbeforeafter'>
        <div className='whatisbeforeafter-image'>
                <img src='/fyrir.webp' alt='Experience preview' />
                <img src='/eftir.webp' alt='Experience preview' />
            </div>
            <div className='whatisbeforeafter-linktopage'>
  <p className='whatisbeforeafter-text'>
    Hér má sjá niðurstöður eftir þrjú skipti með SWIFT meðferð, til að sjá fleiri fyrir og eftir myndir{' '}
    <Link to="/fyrir-og-eftir" className="whatisbeforeafter-link">
  smellið hér.
</Link>
  </p>
</div>
      </div>
    )
  }
  
  export default whatisbeforeafter
