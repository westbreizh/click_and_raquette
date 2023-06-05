import {createPortal} from 'react-dom'
import LoginForm from '../../form/LoginForm'
import { Link, useNavigate } from 'react-router-dom';

export default function ModalConnexionOrSingupFromOrder( props ) {

  const navigate = useNavigate()

  const closeModalConnexion = props.closeModalConnexion
  const handleCloseModal = () => {
    closeModalConnexion();
    navigate(-1);
  };

  return createPortal(

    <>

      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">

            <h4 className="modal__title">
              Pour pouvoir passer commande, merci de vous connecter à votre compte ou bien d'en créer un.
            </h4>
            
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            >
              <span  onClick={handleCloseModal}> &times;</span>

            </button>

          </div>

          <div className="modal__body">

            <LoginForm closeModalConnexion={closeModalConnexion}/>

            <div className="line"> Ou </div>

            <Link 
            to="/inscription" 
            className='btn btn-blue-light'
            >
              inscription
            </Link> 

          </div>

        </div>

      </div>

    <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );
}