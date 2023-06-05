import {createPortal} from 'react-dom'
import LoginForm from '../../form/LoginForm'
import { Link } from 'react-router-dom';

export default function ModalLoginOrSingupFromAccount( props ) {

  const closeModalConnexion = props.closeModalConnexion

  return createPortal(

    <>

      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">

            <h4 className="modal__title">
              Pour accéder à l'integralité des fonctionnalités merci de vous connecter à votre compte
            </h4>
            
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            >
              <span  onClick={closeModalConnexion}> &times;</span>

            </button>

          </div>

          <div className="modal__body">

            <LoginForm closeModalConnexion={closeModalConnexion}/>

            <div className="line"> Ou </div>

            <Link 
            to="./inscription" 
            className='btn btn-blue-light'
            onClick={() => closeModalConnexion() }
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