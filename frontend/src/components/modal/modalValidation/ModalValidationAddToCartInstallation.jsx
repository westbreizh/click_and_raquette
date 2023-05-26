import {createPortal} from 'react-dom'
import { Link } from 'react-router-dom';

export default function ModalValidationAddToCartInstallation( props) {

  const setSubmenuValidation = props.setSubmenuValidation


  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper modal-installation-atc__wrapper">

          <div className='modal-installation-atc__message-wrapper'>  {/*atc pour add to cart*/}

            <div className="modal-installation-atc__validation-bubble-checked">
              <span>&#10003;</span>
            </div>

            <div className='modal-installation-atc__message-text'>
             Article(s) ajouté au panier!
            </div>

            <button
              type="button"
              className="btn-close-atc"
              aria-label="Close"
              onClick={() => setSubmenuValidation(false)}
            >
              <span >&times;</span>

            </button>

          </div>

          <div className='modal-installation-atc__buttons-link-wrapper'>

            <Link to="/panier" className='btn btn-white-green btn-installation-atc'>
              voire le panier
            </Link>  

            <Link to="/panier" className='btn btn-green btn-installation-atc btn-last'>
              commander
            </Link>  
            
          </div>

          <div className='modal-installation-atc__message-wrapper'>  {/*atc pour add to cart*/}

            <div className='modal-installation-atc__message-text ball-need'>
             Besoin de balles, d'accessoires ?
            </div>

          </div>

          <div className='modal-installation-atc__buttons-link-wrapper modal-installation-atc-last'>

            <Link to="/balles" className='btn btn-green btn-installation-atc'>
              balles 
            </Link>  

            <Link to="/accessoires" className='btn btn-white-green btn-installation-atc btn-last '>
              accessoires
            </Link>  

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );

} 