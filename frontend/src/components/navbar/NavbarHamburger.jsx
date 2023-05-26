import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { useSelector } from "react-redux"
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import AccountIconMobile from "../icons/mobile/AccountIconMobile"
import LoginIconMobile from "../icons/mobile/LoginIconMobile"
import ShopIconMobile from "../icons/mobile/ShopIconMobile"


export default function NavbarHamburger() {

  const isConnected = useSelector((state) => state.user.isConnected);
  const [isMenuHamburgerOpen, setToggleMenuHamburger] = useState(false)

  function toggleMenuHamburger() { 
    setToggleMenuHamburger(!isMenuHamburgerOpen);
  }
  
  return (

    <nav  className="navHamburger__contenair">

      <Hamburger  toggled={isMenuHamburgerOpen} toggle={setToggleMenuHamburger}/>

      <ul className={`menuDropdownHamburger ${isMenuHamburgerOpen ? " showMenuDropdownHamburger" : ""}`}>

        <li className='menuHamburger__li' onClick={() =>toggleMenuHamburger() } >
            <NavLink  to='/click-raquette' className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
              <HomeIcon className="menuHamburger__icon"/>
              Accueil
            </NavLink>
        </li> 

        <li className='menuHamburger__li' onClick={() => toggleMenuHamburger()} >
            <NavLink  to="/cordez" className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
              <SportsTennisIcon className="menuHamburger__icon"/>
              Cordez
            </NavLink>
        </li>

        <li className='menuHamburger__li' >
          <ShopIconMobile toggleMenuHamburger={toggleMenuHamburger} /> 
        </li>

        {isConnected? 
          <li className='menuHamburger__li'  >
            <AccountIconMobile toggleMenuHamburger={toggleMenuHamburger} /> 
          </li>
            :
          <li className='menuHamburger__li'  >
             <LoginIconMobile  toggleMenuHamburger={toggleMenuHamburger}/> 
          </li>
                
          }
       

        <li className='menuHamburger__li ' onClick={() => toggleMenuHamburger()} >
          <NavLink  to="/panier" className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
            <ShoppingBasketIcon className="menuHamburger__icon"/>
            panier
          </NavLink>
        </li>
      </ul>

    </nav>

  )}