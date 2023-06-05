import { useState } from 'react'
import ModalLoginOrSingupFromAccount from '../../modal/modalLoginOrSignup/ModalLoginOrSignupFromAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LoginIconMobile(props) {

  const toggleMenuHamburger = props.toggleMenuHamburger
  const [isModalConnexionOpen, setModalConnexionOpen] = useState(false);
  const showModal = function(){
    setModalConnexionOpen(true);
  };
  const closeModalConnexion = function(){
    setModalConnexionOpen(false);
    toggleMenuHamburger();
  };


  return (

    <div className="modal__connexion">

      <div className="icon-login__wrapper" onClick={showModal}>
        <AccountCircleIcon className="navBar__icon "/>
          compte
      </div>

      {isModalConnexionOpen && 
      <ModalLoginOrSingupFromAccount 
      closeModalConnexion={closeModalConnexion}
      />}

    </div>
  )
} 