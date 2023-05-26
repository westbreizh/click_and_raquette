//sécurité pour le changement d'email et password ?

import {createPortal} from 'react-dom'
import ChangeEmailForm from '../../form/ChangeEmailForm';

export default function ModalChangeEmail(props) {

  const onClose = props.onClose

  return createPortal(

    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">

            <h4 className="modal__title">Modifier votre e-mail</h4>
            
            <button
              type="button"
              className="modal__close-button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={onClose}>
                &times;
              </span>
            </button>

          </div>
             
          <div className="modal__body">

            <ChangeEmailForm onClose={onClose}/>

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );
}