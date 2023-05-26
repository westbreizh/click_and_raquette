import { NavLink } from "react-router-dom"


export default function ShopSubmenu(props) {

const toogleSubmenuOff = props.toogleSubmenuOff

  return(

    <div className='submenu__contenair'>

      <div className="submenu__max-width-box">

        <div className='submenu__colum-left'>

          <ul className='submenu__ul'>

            <li className='submenu__li' onClick={()=> toogleSubmenuOff()}  >
                <NavLink  to="/cordages" className={(nav) => (nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive")} end>
                Cordages
                </NavLink>
            </li> 

            <li className='submenu__li'  onClick={()=> toogleSubmenuOff()}  >
                <NavLink  to="/balles" className={(nav) => (nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive")} end>
                Balles
                </NavLink>
            </li> 

            <li className='submenu__li'  onClick={()=> toogleSubmenuOff()}  >
                <NavLink  to="/accessoires" className={(nav) => (nav.isActive ? "submenu__navLink__active" : "submenu__navLink__inactive")} end>
                Accessoires
                </NavLink>
            </li> 

          </ul>

        </div>

      </div>

    </div> 
  )
}