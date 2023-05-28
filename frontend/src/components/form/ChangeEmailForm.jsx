import { useState } from "react"
import { useSelector } from 'react-redux'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { changeEmail } from "../../store/userSlice"
import { store } from "../../store/store"
import ModalValidationMessageModif from "../modal/modalValidation/ModalValidationMessageModif";
import { shemaInputChangeEmail } from "../../Utils/shemaInput"


export default function ChangeEmailForm( props ) {

  const onClose = props.onClose
  const token = useSelector((state) => state.user.token);

  //gestion de l'ouverture du modal de validation et fermeture des 2 modales (modalValidation et modalChangeEmail...)
  const [isModalValidationMessageOpen, setModalValidationMessageOpen] = useState(false);
  const showModalValidation = function(){
  setModalValidationMessageOpen(true);
  };

  const hideModal = function(){
  setModalValidationMessageOpen(false);
  onClose();
  };

  // gestion de l'affichage de l'erreur backend dans la balise p
  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false) ;
  const showPErrorFromBackend = () => {
   setShowErrorFromBackEnd( true );
 };


  // gestion du contôle de la validité des inputs 
  const { register , formState, handleSubmit,   formState: { errors }  } =
   useForm({
    resolver: yupResolver(shemaInputChangeEmail),
    mode: 'onTouched',
    shouldFocusError: true,
  });

  const {isValid} = formState;

   // gestion de la valeure de la réponse backend 
   const [messageFromBackEnd, setMessageFromBackend] = useState("") ;
   function changeMessageFromBackEnd(messageFromBack) {
     setMessageFromBackend(messageFromBack);
   }
 
   
   //fonction asynchrone vers le backend modifiant l'e-mail

   const onSubmit = async function (data) {

    try{
      const response = await fetch(`http://localhost:3001/api/user/changeEmail`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({email: data.email, new_email: data.new_email,}),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        }
      })

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        store.dispatch(changeEmail(data.new_email));
        showModalValidation();
        console.log(result)
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  return (

  <>
    <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">

      <label className="input__label"> Ancienne adresse e-mail <sup>*</sup>  </label>
      <input type="email" {...register("email")} className="input__text" />
      <p className="input__error">{errors.email?.message}</p>

      <label className="input__label"> Nouvelle adresse e-mail <sup>*</sup>  </label>
      <input type="email" {...register("new_email")} className="input__text" />
      <p className="input__error">{errors.new_email?.message}</p>

      <label className="input__label"> Confirmez l'adresse e-mail <sup>*</sup>  </label>
      <input type="email" {...register("confirm_new_email")} className="input__text" />
      <p className="input__error">{errors.confirm_new_email?.message}</p>


      {isPErrorFromBackEndOpen ?  
      <p className="input__error message__error">{messageFromBackEnd}</p>
      :""}

      <div className="buttons-wrapper-ModalChange">

        <button 
        disabled={ !isValid} 
        type="submit" 
        className={isValid ? "btn btn-blue" : "btn btn-blue-invalid"}>
          valider
        </button>

        <button
        onClick={() => onClose() } 
        className={"btn btn-white-blue btn-last"}>                
          annuler
        </button>

      </div>













      {isModalValidationMessageOpen && 
      <ModalValidationMessageModif 
      onClose={hideModal} 
      title=" Votre email a été mise à jour !"/>
    }

    </form>


   </>
  )
}