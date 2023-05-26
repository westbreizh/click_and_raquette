import {createPortal} from 'react-dom'
import { useState } from "react"
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import ModalValidationMessageResetPassword from '../modalValidation/ModalValidationMessageResetPassword'
import { shemaInputResetPasswordEmail} from '../../../Utils/shemaInput'



export default function ModalResetPassword(props) {

  const closeModalResetPassword = props.closeModalResetPassword
  const closeModalConnexion = props.closeModalConnexion
  const [isModalValidationMessageOpen, setModalValidationMessageOpen] = useState(false);

  const showModalValidation = function(){
  setModalValidationMessageOpen(true);
  };

  // gestion du contôle de la validité des inputs 
  const { register , formState, handleSubmit, formState: { errors }  } =
   useForm({
    resolver: yupResolver(shemaInputResetPasswordEmail),
    mode: 'onTouched',
    shouldFocusError: true,
    });
  const {isValid} = formState;

  // gestion de la valeure de la réponse backend 
  const [messageFromBackEnd, setMessageFromBackend] = useState("hello") ;
  function changeMessageFromBackEnd(x) {
   setMessageFromBackend(x);
  }

  // gestion de l'affichage de l'erreur backend dans la balise p
  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false) ;
  const showPErrorFromBackend = () => {
   setShowErrorFromBackEnd( true );
  };

 
  //fonction asynchrone vers le backend modifiant l'e-mail
  const onSubmit = async function (data) {

    try{
      const response = await fetch(`http://localhost:3001/api/user/sendEmailToResetPassword`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({email: data.email}),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        console.log(result);
        showModalValidation();
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">

            <h4 className="modal__title">
              Réinitialisation de votre mot de passe
            </h4>

            <button
              type="button"
              className="modal__close-button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={closeModalResetPassword}>
                &times;
              </span>
            </button>

          </div>

          <div className="modal__body modal__body-reset-password" >

            <p className='reset-password-indication'>
              Entrez l'adresse e-mail associée à votre compte 
              et un lien de réinitialisation du mot de passe vous sera addressé par e-mail.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="form-modal modal__form-wrapper">

              <label className="input__label"> Adresse e-mail <sup>*</sup>  </label>
              <input type="email" {...register("email")} className="input__text" />
              <p className="input__error">{errors.email?.message}</p>

              {isPErrorFromBackEndOpen ? 

                <p className="input__error message__error">{messageFromBackEnd}</p>
                :""}

                <div className="buttons-wrapper-ModalChange">

                  <button 
                  disabled={ !isValid} 
                  type="submit" 
                  className={isValid ? "btn btn-blue" : "btn btn-blue-invalid"}  
                  >
                    valider
                  </button>

                  <button
                  onClick={() => closeModalResetPassword() } 
                  className={"btn btn-white-blue"}
                  >                
                    annuler
                  </button>

                </div>

            </form>

            {isModalValidationMessageOpen && 
              <ModalValidationMessageResetPassword 
              closeModalConnexion={closeModalConnexion}/>
            }

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );
}