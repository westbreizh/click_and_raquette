import { NavLink } from "react-router-dom"
import LogoutIcon from "../icons/desktop/LogoutIcon"


export default function AccountSubmenu(props) {

const isSubmenuAccountOpen = props.isSubmenAccountuOpen
const toogleSubmenuOff = props.toogleSubmenuOff

  return(
    
    <div className='submenu__contenair'>

      <div className="submenu__max-width-box">

        <div className='submenu__colum-left'>

          <ul className='submenu__ul'>

            <li className='submenu__li' onClick={()=> toogleSubmenuOff()}  >
                <NavLink  to="/coordonnées" className={(nav) => (nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive")} end>
                Coordonnées
                </NavLink>
            </li> 

            <li className='submenu__li'  onClick={()=> toogleSubmenuOff()}  >
                <NavLink  to="/préférences_joueur" className={(nav) => (nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive")} end>
                Préférences joueur
                </NavLink>
            </li> 

            <li className='submenu__li'  onClick={()=> toogleSubmenuOff()}  >
                <NavLink  to="/historique_commandes" className={(nav) => (nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive")} end>
                Commandes
                </NavLink>
            </li> 

          </ul>
          
        </div>

        <div className='submenu__colum-right'>
            <LogoutIcon isSubmenuOpen= {isSubmenuAccountOpen}  />
        </div>

      </div>

    </div> 
  )
}