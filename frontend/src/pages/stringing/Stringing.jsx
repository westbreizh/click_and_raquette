// enregistement préférence joueur à completer
// definir une variable pour le prix de la pose du cordage mais ou ?

import { useState } from 'react';
import {  useSelector, useDispatch } from 'react-redux'
import { addInstallationString, calculNumberArticle } from "../../store/cartSlice"
import { NavLink } from 'react-router-dom';
import SelectClub from '../../components/select/SelectClub';
import SelectString from '../../components/select/SelectString';
import SelectRopeString from '../../components/select/SelectRopeString';
import ModalValidationAddToCartInstallation from '../../components/modal/modalValidation/ModalValidationAddToCartInstallation';


export default function Stringing() {

  const [isSubmenuValidationOpen, setSubmenuValidation] = useState(false);
  const clubChoice = useSelector(state => state.cart.clubChoice);
  const stringRopeChoice = useSelector(state => state.cart.stringRopeChoice);
  const stringChoice = useSelector(state => state.cart.stringChoice[0]);
  //const userEmail = useSelector(state => state.user.userInfo.email);
  
  const isValid =
    clubChoice !== "Choisissez votre club" &&
    stringRopeChoice !== "Choisissez votre tension" &&
    stringChoice.id !== "choisissez votre cordage"
    ;
    

  //fonction asynchrone vers le backend enregistrant les choix relatifs aux cordages de  l'utilisateur
  const registerPreferencePlayer = async function (userEmail, clubChoice, stringRopeChoice, stringChoice ) {
    try{
      const response = await fetch(`http://localhost:3001/api/user/registerPreferencePlayer`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({email: userEmail, club: clubChoice, stringRope: stringRopeChoice , string: stringChoice } ),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
          const result = await response.json();
          console.log(result.message)
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  const dispatch = useDispatch();
  
  const onSubmit= () => {
    if (stringChoice.id === "cordage fourni par le joueur") { 
      const article = {
        categorie:"pose cordage seule",
        quantity: 1,
        price: 11, 
        stringRopeChoice, 
        stringChoice}
        console.log(article)
        dispatch(addInstallationString(article))
        setSubmenuValidation(true)
        //registerPreferencePlayer(userEmail, clubChoice, stringRopeChoice, stringChoice )
    } else{ 
      const article = {
        categorie:"fourniture et pose cordage", 
        price: (11 + parseFloat(stringChoice.price)).toFixed(2),
        quantity: 1,
        stringRopeChoice, 
        stringChoice
      }
      console.log(article)
      dispatch(addInstallationString(article))
      setSubmenuValidation(true)
      dispatch(calculNumberArticle());
      //registerPreferencePlayer(userEmail, clubChoice, stringRopeChoice, stringChoice )
    }
  };
       
    
  return (

    <main className="stringing__main">

      <div className=" stringing__bg"> </div>

      <section className="stringing__contenair">

        <div className="stringing-header__wrapper">

          <h1 className="stringing-header__h1">
            Commandez votre cordage!
          </h1>

          <span className="stringing-header__littleBitText">
            Le forfait de la pose du cordage est de 11 €.
          </span>
          <span className="stringing-header__littleBitText">
            Renseignez les différents champs ci-dessous, cliquez et commandez !
          </span>

        </div>


        <div className="stringing-form__contenair">

          <div className='club stringing-form__section-wrapper '>

            <label className="stringing-form__label" >Club </label>

            <SelectClub  />

          </div>

          <div className='string stringing-form__section-wrapper'>

            <label className="stringing-form__label">Cordage</label>

            <SelectString  />

            { stringChoice.id !== "cordage fourni par le joueur" && stringChoice.id !== "choisissez votre cordage" ? (
              <div className='stringing-form__string-wrapper  modal-atc__product-wrapper'>
                <NavLink to={`/fiche_produit/cordage/${stringChoice.id}`} 
                className=" stringing-form__string-link cart-content__link-to-card-product">

                  <img crossOrigin="anonymous" src={stringChoice.image_url} 
                  alt={stringChoice.model} className="stringing-form__string-img" />

                  <div className='stringing-form__string-product-info-wrapper '>
                    <div>{stringChoice.mark}</div>
                    <div>{stringChoice.model}</div>
                    <div>{stringChoice.price} €</div>
                  </div>

                </NavLink>
              </div>
            ) : null}


            {stringChoice.id === "cordage fourni par le joueur"  ?  (

                <div className='stringing-form__own-string-wrapper'> 

                  <div className="stringing-form__validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className='modal-atc__message-text'>
                  Je fournis mon propre cordage
                  </div>
                  
                </div>

            ) : null}

          </div>

          <div className=' rope stringing-form__section-wrapper'>
            <label className="stringing-form__label" > Choix de la tension  </label>

            <SelectRopeString />
            
          </div>

          <div className=" stringing-form__section-wrapper stringing-form__section-wrapper-button">

            <button 
              onClick={() => onSubmit()}
              disabled={ !isValid} 
              type="submit" 
              className={`stringing-form__btn-order btn btn-blue ${isValid ? "" : "btn-blue-invalid"}`}
              >
              Push cordage in the popoche
            </button>


            {isSubmenuValidationOpen && 
              <ModalValidationAddToCartInstallation
              setSubmenuValidation = {setSubmenuValidation}
              />
            }

          </div>

        </div>

      </section>

    </main>

    )
  }



