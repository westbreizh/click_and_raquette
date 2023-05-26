import { NavLink } from "react-router-dom"


export default function NavbarAccount() {


  return (
  
    <nav  className="navBarAccount__contenair">

      <div className="navBarAccount__max-width">

        <ul className="navBarAccount__ul">

          <li className='navBarAccount__li'>
            <NavLink 
              to="/coordonnées" 
              className={(nav) => (nav.isActive ? "navBarAccount__active" : "navBarAccount__inactive")} >
              Coordonnées
            </NavLink>
          </li> 

          <li className='navBarAccount__li' id="tooLongText" >
            <NavLink  to="/préférences_joueur" className={(nav) => (nav.isActive ? "navBarAccount__active" : "navBarAccount__inactive")} end>
              Préférences cordage
            </NavLink>
          </li>

          <li className='navBarAccount__li navBarAccount__li-last'>
            <NavLink  to="/historique_commandes" className={(nav) => (nav.isActive ? "navBarAccount__active" : "navBarAccount__inactive")} end>
              commandes
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  )
}
