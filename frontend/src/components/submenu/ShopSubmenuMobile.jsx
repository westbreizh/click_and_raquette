import { Link } from "react-router-dom"
import BackNavSubmenu from "../button/BackNavSubmenu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function ShopSubmenuMobile(props) {


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
           Boutique
      </div>

      <div className='submenuMobile__wrapper-links'>

        <ul className='submenuMobile__ul'>

          <li className='submenuMobile__li' onClick={()=> toggleMenuHamburgerAndSubmenu()}  >
            <Link  to="/cordages" className="submenuMobile__link">
            Cordages
            </Link>
            <ArrowForwardIosIcon className="submenuMobile__icon-forward"/>
          </li> 

          <li className='submenuMobile__li' onClick={()=> toggleMenuHamburgerAndSubmenu()}  >
            <Link  to="/balles" className="submenuMobile__link">
            Balles
            </Link>
            <ArrowForwardIosIcon className="submenuMobile__icon-forward"/>
          </li> 

          <li className='submenuMobile__li'  onClick={()=> toggleMenuHamburgerAndSubmenu()}  >
            <Link  to="/accessoires" className="submenuMobile__link">
            Accesoires
            </Link>
            <ArrowForwardIosIcon className="submenuMobile__icon-forward"/>
          </li> 

        </ul>

      </div>

    </div>

  )
}