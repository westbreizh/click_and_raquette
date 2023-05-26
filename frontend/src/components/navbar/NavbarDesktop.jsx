import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ShopIcon from "../icons/desktop/ShopIcon";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from "../icons/desktop/LoginIcon"
import AccountIcon from "../icons/desktop/AccountIcon"


export default function NavbarDesktop() {

  const isConnected = useSelector((state) => state.user.isConnected)
  const numberArticle = useSelector((state) => state.cart.numberArticle)


  return (
  
    <nav  className="navBar__contenair">

      <ul className="navBar__ul">

        <li className='navBar__li'>
          <NavLink  to='/click-raquette' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <HomeIcon className="navBar__icon"/>
            Accueil
          </NavLink>
        </li> 

        <li className='navBar__li'>
          <NavLink  to="/cordez" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <SportsTennisIcon className="navBar__icon"/>
            Cordez
          </NavLink>
        </li>

        <li className='navBar__li'>
          < ShopIcon />
        </li>

        <li className='navBar__li'  >
          {isConnected? 
            <AccountIcon  /> 
            :
            < LoginIcon/>}
        </li>

        <li className='navBar__li navBar__li-shop'>
          <NavLink  to="/panier" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <ShoppingBasketIcon className="navBar__icon"/>
            panier
            {numberArticle > 0 && 
            <div className="number-article-desktop navBar__li-shop">{numberArticle}</div>}           
          </NavLink> 
        </li>

      </ul>
    </nav>
  )
}






 
  
    
  
    
