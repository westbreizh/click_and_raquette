import { Link } from "react-router-dom"
import LogoutIconMobile from "../icons/mobile/LogoutIconMobile"
import BackNavSubmenu from "../button/BackNavSubmenu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function AccountSubmenuMobile(props) {


  const toggleMobileSubmenu = props.toggleMobileSubmenu
  const toggleMenuHamburger = props.toggleMenuHamburger

  function toggleMenuHamburgerAndSubmenu(){
    toggleMenuHamburger();
    toggleMobileSubmenu();
  }


  return(

    <div className='submenuMobile__contenair'>
        
      <BackNavSubmenu   toggleMobileSubmenu ={toggleMobileSubmenu} />

  
      <div className='submenuMobile__wrapper-title'>
           Mon compte
      </div>

      <div className='submenuMobile__wrapper-links'>

        <ul className='submenuMobile__ul'>

          <li className='submenuMobile__li' onClick={()=> toggleMenuHamburgerAndSubmenu()}  >
            <Link  to="/coordonnées" className="submenuMobile__link">
            Coordonnées
            </Link>
            <ArrowForwardIosIcon className="submenuMobile__icon-forward"/>
          </li> 

          <li className='submenuMobile__li' onClick={()=> toggleMenuHamburgerAndSubmenu()}  >
            <Link  to="/préférences_joueur" className="submenuMobile__link">
            Préférences cordage
            </Link>
            <ArrowForwardIosIcon className="submenuMobile__icon-forward"/>
          </li> 

          <li className='submenuMobile__li'  onClick={()=> toggleMenuHamburgerAndSubmenu()}  >
            <Link  to="/historique_commandes" className="submenuMobile__link">
            Commandes
            </Link>
            <ArrowForwardIosIcon className="submenuMobile__icon-forward"/>
          </li> 

        </ul>
      </div>

      <div className='submenuMobile__logout'>
          <LogoutIconMobile  toggleMenuHamburgerAndSubmenu={toggleMenuHamburgerAndSubmenu}/>
      </div>

    </div>

  )
}