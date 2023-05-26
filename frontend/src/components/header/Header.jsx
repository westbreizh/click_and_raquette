import NavbarDesktop from "../navbar/NavbarDesktop"
import logo from "../../assets/LOGO.jpg"
import NavbarHamburger from "../navbar/NavbarHamburger"

export default function Header() {

  return (

    <header className="header">

      <div className="header__wrapper-width">
        
          <img src={logo} alt="logo de click & raquette" className="header__logo"/>
        
          <NavbarDesktop />

          <NavbarHamburger />

      </div>
      
    </header>

  )
}