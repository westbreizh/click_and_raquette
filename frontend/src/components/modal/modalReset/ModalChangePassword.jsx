//sécurité pour le changement d'email et password ?

import {createPortal} from 'react-dom'
import { useState } from "react"
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Input, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { connectedToggle } from '../../../store/userSlice'
import ModalValidationMessageModif from '../modalValidation/ModalValidationMessageModif'
import { shemaInputChangePassword } from '../../../Utils/shemaInput'


export default function ModalChangePassword(props) {

  const onClose = props.onClose
  const userEmail = useSelector((state) => state.user.userInfo.email);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalValidationMessageOpen, setModalValidationMessageOpen] = useState(false);

  const showModalValidation = function(){
  setModalValidationMessageOpen(true);
  };

  const backToBegin = function(){
  dispatch(connectedToggle()); 
  navigate("/click-raquette");
  };



  // gestion de l'affichage du mot de passe
  const [showPassword, setShowPassWord] = useState(false) ;
  const handleClickShowPassword = () => {
    setShowPassWord( !showPassword );
  };
  const [showNewPassword, setShowNewPassWord] = useState(false) ;
  const handleClickShowNewPassword = () => {
    setShowNewPassWord( !showNewPassword );
  };
  const [showConfirmNewPassword, setShowConfirmNewPassWord] = useState(false) ;
  const handleClickShowConfirmNewPassword = () => {
    setShowConfirmNewPassWord( !showConfirmNewPassword );
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // gestion du contôle de la validité des inputs 
  const { register , formState, handleSubmit,   formState: { errors }  } =
    useForm({
      resolver: yupResolver(shemaInputChangePassword),
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
      const response = await fetch(`http://localhost:3001/api/user/changePassword`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({email: userEmail, password: data.password, new_password: data.new_password,}),
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
        showModalValidation();
        console.log("le retour du backend est :")
        console.log(result)
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

            <h4 className="modal__title">Modifier votre mot de passe</h4>
            
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

          <div className="modal__body " >

            <form onSubmit={handleSubmit(onSubmit)} className="form-modal">

              <label className="input__label"> Ancien mot de passe <sup>*</sup> </label>

              <Input type={showPassword? "text" : "password"} {...register("password") }  className="input__text-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <Visibility className="eye"/> : <VisibilityOff className="eye"/>}
                    </IconButton>
                </InputAdornment>
                }
              />
              <p className="input__error">{errors.password?.message}</p>

              <label className="input__label"> Nouveau mot de passe <sup>*</sup> </label>
              <Input type={showNewPassword? "text" : "password"} {...register("new_password") }  className="input__text-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowNewPassword} onMouseDown={handleMouseDownPassword}>
                    {showNewPassword ? <Visibility className="eye"/> : <VisibilityOff className="eye"/>}
                    </IconButton>
                </InputAdornment>
                }
              />
              <p className="input__error">{errors.new_password?.message}</p>

              <label className="input__label"> Confirmer le nouveau mot de passe <sup>*</sup> </label>
              <Input type={showConfirmNewPassword? "text" : "password"} {...register("new_passwordConfirm") }  className="input__text-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowConfirmNewPassword} onMouseDown={handleMouseDownPassword}>
                    {showConfirmNewPassword ? <Visibility className="eye"/> : <VisibilityOff className="eye"/>}
                    </IconButton>
                </InputAdornment>
                }
              />
              <p className="input__error">{errors.new_passwordConfirm?.message}</p>


              {isPErrorFromBackEndOpen ?  
                <p className="input__error message__error">{messageFromBackEnd}</p>
              :""}

              {isValid?  

              <div className='info-Logout-ChangePassword'>
                En validant la modification de votre mot de passe, vous allez être deconnecté de votre compte.
              </div> 
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
              onClose={backToBegin}
              title=" Votre mot de passe a bien été modifié l'ami, par mesure de sécurité vous allez être deconnecté !"
              />
            }

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );
}