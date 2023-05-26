import { Link } from "react-router-dom"
import { useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import { useStore } from "react-redux"
import { setUserInfo} from '../../store/store'
import { shemaInputResetPassword } from "../../Utils/shemaInput"

import ModalValidationMessage from "../../components/modal/modalValidation/ModalValidationMessage"


import { Input, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'




export default function ResetPassword() {

  // gestion du contôle de la validité des inputs 
  const { register , formState, handleSubmit,   formState: { errors }  } =
   useForm({
            resolver: yupResolver(shemaInputResetPassword),
            mode: 'onTouched',
            shouldFocusError: true,
          });

  const {isSubmitting, isValid} = formState

  // gestion de l'affichage du mot de passe
  const [showPassword, setShowPassWord] = useState(false) ;
  const handleClickShowPassword = () => {
    setShowPassWord( !showPassword );
  };
  const [showConfirmPassword, setShowConfirmPassWord] = useState(false) ;
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassWord( !showConfirmPassword );
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
 
 
  

  //gestion de l'ouverture du modal 

  const [isModalValidationMessageOpen, setModalValidationMessageOpen] = useState(false);

  const showModal = function(){
    setModalValidationMessageOpen(true);
  };

  const hideModal = function(){
    setModalValidationMessageOpen(false);
  };

  const titleMessage = " Votre compte a bien été crée"





  //fonction asynchrone vers le backend modifiant le mot de passe
  const onSubmit = async function (data) {
    try{
      const response = await fetch(`http://localhost:3001/api/user/signup`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({civilite: data.civilite, lastname: data.lastname, forename: data.forename,birthday: data.birthday, email: data.email, password: data.password}),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        showModal();
        console.log(result.userInfo)
        console.log(result.message)
        console.log(result.token)
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }



  return (

    <main className="account__main">

      <div className="account__bg"> </div>

      <section className="account__contenair">

          <div className="account__header">

            <h1 className="account__header__h1">
              Réinitialisation du mot de passe
            </h1>

          </div>


          <div className="submenu__wrapper">


             <form onSubmit={handleSubmit(onSubmit)} className="form__identiti">


               <label className="input__label"> Mot de passe <sup>*</sup> </label>
               <Input type={showPassword? "text" : "new_password"} {...register("password") }  className="input__text-password"
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                     {showPassword ? <Visibility className="eye"/> : <VisibilityOff className="eye"/>}
                     </IconButton>
               </InputAdornment>
               }
               />
               <p className="input__error">{errors.password?.message}</p>


               <label className="input__label"> Confirmation de mot de passe <sup>*</sup> </label>
               <Input type={showConfirmPassword? "text" : "confirm_new_password"} {...register("passwordConfirm") }  className="input__text-password"
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownPassword}>
                     {showConfirmPassword ? <Visibility className="eye"/> : <VisibilityOff className="eye"/>}
                     </IconButton>
               </InputAdornment>
               }
               />
               <p className="input__error">{errors.passwordConfirm?.message}</p>

               <button disabled={isSubmitting || !isValid} type="submit" className={"button__submit "}>
                  Réinitialiser le mot de passe
               {!isValid? <div className="button__submit-bg-invalid"></div>: 
               <div className="button__submit-bg"></div>}
               </button>

            </form>

          </div>

      </section>

    </main>
    
  )
}


