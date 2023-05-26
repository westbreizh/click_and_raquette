import {createPortal} from 'react-dom'


export default function ModalValidationMessageModif( props) {

  const title = props.title
  const onClose = props.onClose

  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">
            <h4 className="modal__title"> {title} </h4>         
          </div>

          <div className="modal__body">

            <div className="modal__button-wrapper" >
              <button
              onClick={() => { onClose() }} 
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
  