import {createPortal} from 'react-dom'
import CoordinateForm from '../../form/CoordinateForm'


export default function ModalCreateOrUploadCoordinate(props) {

  const onClose = props.onClose

  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">

            <h4 className="modal__title">Renseignez vos coordonnées</h4>
            
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

          <div className="modal__body ">

            <CoordinateForm onClose={onClose} />

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );
}