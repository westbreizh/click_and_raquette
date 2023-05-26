import { NavLink } from "react-router-dom"


export default function NavbarShop() {

  return (
  
    <nav  className="navBarShop__contenair">

        <ul className="navBarShop__ul">

          <li className='navBarShop__li'>

            <div className="submenuToogleDropDown" >
              
              <NavLink 
                to="/cordages" 
                className={(nav) => (nav.isActive ? "navBarShop__active" : "navBarShop__inactive")} >
                Cordages
              </NavLink>

            </div>

          </li> 

          <li className='navBarShop__li'>

            <div className="submenuToogleDropDown">

              <NavLink  to="/balles" className={(nav) => (nav.isActive ? "navBarShop__active" : "navBarShop__inactive")} end>
                Balles
              </NavLink>
              
            </div>

          </li>

          <li className='navBarShop__li navBarShop__li-last'>

            <div className="submenuToogleDropDown" >
              
              <NavLink  to="/accessoires" className={(nav) => (nav.isActive ? "navBarShop__active" : "navBarShop__inactive")} end>
                Accessoires
              </NavLink>

            </div>

          </li>

        </ul>


    </nav>
  )
}
