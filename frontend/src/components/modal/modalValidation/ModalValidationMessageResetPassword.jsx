
import {createPortal} from 'react-dom'
import { useNavigate } from 'react-router-dom'


export default function ModalValidationMessageRestPassword( props) {

  const closeModalConnexion = props.closeModalConnexion
  const navigate = useNavigate();
  const goToHomeAndcloseModals = function(){
    closeModalConnexion();
    navigate("/click-raquette");
  }


  return createPortal(

    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">
            <h4 className="modal__title"> Réinitialisation du mot de passe </h4>            
          </div>

          <div className="modal__body modal__body-reset-password-validation">

            <div className="modal__button-wrapper" >

              <p className='reset-password-indication'>
                Un email avec les instructions à suivre pour modifier votre mot de passe sera envoyé à votre addresse e-mail.
                La réception de l'e-mail de réinitialisation du mot de passe peut prendre jusqu'à cinq minutes. 
                Si vous ne recevez pas l'e-mail rapidement, consultez votre dossier de courrier indésirable.. 
              </p>

              <button
              onClick={() => { goToHomeAndcloseModals() }} 
              className={"btn btn-blue"}
              >                
                ok
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal2')
  );

} 
  