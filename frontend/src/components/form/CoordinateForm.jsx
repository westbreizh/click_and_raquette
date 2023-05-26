import { useState } from "react"
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useStore } from "react-redux"
import { useSelector } from "react-redux"
import { shemaInputCoordonate} from '../../Utils/shemaInput'
import { setUserAddress, setUserInfo} from '../../store/userSlice'
import ModalValidationMessageModif from "../modal/modalValidation/ModalValidationMessageModif";


export default function CoordinateForm( props ) {

  const onClose = props.onClose

 
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
            resolver: yupResolver(shemaInputCoordonate),
            mode: 'onTouched',
            shouldFocusError: true,
          });

  const {isSubmitting, isValid} = formState;

   // gestion de la valeure de la réponse backend 
   const [messageFromBackEnd, setMessageFromBackend] = useState("") ;

   function changeMessageFromBackEnd(messageFromBack) {
     setMessageFromBackend(messageFromBack);
   }


  // recupération du store redux en asynchrone
  // useSelector et useDispatch pas ok useStore ok  
  const store = useStore()
  const playerId = useSelector((state) => state.user.userInfo.id);
  const token = useSelector((state) => state.user.token);



  //fonction asynchrone vers le backend verifiant l'email et le mot de passe associé

  const onSubmit = async function (data) {

    try{
      const response = await fetch(`http://localhost:3001/api/user/createOrUploadCoordinate`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({playerId: playerId, telephone: data.telephone.replace(/(\d{2})(?=\d)/g, '$1 '), road: data.road, city: data.city, postalCode : data.postalCode.replace(/^(\d{2})(\d{3})$/, '$1 $2')}),
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
        store.dispatch(setUserAddress(result.userAddress));
        store.dispatch(setUserInfo(result.userInfo));
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

      <label className="input__label"> Numéro de téléphone   </label>
      <input type="tel"  {...register('telephone')} className="input__text"  />
      <p className="input__error">{errors.telephone?.message}</p>  

      <label className="input__label"> Adresse (nom et numéro de la voirie) </label>
      <input type="text" {...register("road")} className="input__text" />
      <p className="input__error">{errors.road?.message}</p>

      <label className="input__label"> Ville  </label>
      <input type="text" {...register("city")} className="input__text" />
      <p className="input__error">{errors.city?.message}</p>

      <label className="input__label"> Code postal  </label>
      <input type="text" {...register("postalCode")} className="input__text" />
      <p className="input__error">{errors.postalCode?.message}</p>

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

    </form>

    {isModalValidationMessageOpen && 
      <ModalValidationMessageModif 
      onClose={hideModal} 
      title=" Vos coordonnées ont été mise à jour !"/>
    }

   </>
  )
}