import { useState } from 'react'
import ModalConnexionOrSingup from '../../modal/ModalConnexionOrSignup';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LoginIcon(props) {



  //gestion de l'ouverture du modal 

  const [isModalConnexionOpen, setModalConnexionOpen] = useState(false);

  const showModal = function(){
    setModalConnexionOpen(true);
  };

  const closeModalConnexion = function(){
    setModalConnexionOpen(false);

  };


  return (

    <div className="modal__connexion">

      <div className="icon-login__wrapper" onClick={showModal}>
        <AccountCircleIcon className="navBar__icon "/>
          compte
      </div>

      {isModalConnexionOpen && 
      <ModalConnexionOrSingup 
      closeModalConnexion={closeModalConnexion}/>}
    </div>
  )
} 