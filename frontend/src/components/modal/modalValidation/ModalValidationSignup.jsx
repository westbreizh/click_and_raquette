import {createPortal} from 'react-dom'
import { useNavigate } from 'react-router-dom'


export default function ModalValidationSignup( props) {

  const onClose = props.onClose
  const navigate = useNavigate();
  const goBackAndcloseModal = function(){
    onClose();
    navigate(-1);
  }

  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">
            <h4 className="modal__title"> Votre compte a bien été crée </h4>             
          </div>

            <div className="modal__body">

              <div className="modal__button-wrapper" >

                <button
                  onClick={() => {goBackAndcloseModal() }} 
                  className={"btn btn-blue"}
                >                
                  ok
                </button>

              </div>

            </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );

} 