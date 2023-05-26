import { useState } from "react"
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShopSubmenuMobile from "../../submenu/ShopSubmenuMobile";


export default function ShopIconMobile(props) {


  const toggleMenuHamburger = props.toggleMenuHamburger


  const [isShopSubmenuOpen, setShopSubmenuOpen] = useState(false)
  function toggleMobileSubmenu() { 
      setShopSubmenuOpen(!isShopSubmenuOpen);  }
  
 
      
      


  return (

    <>
      <div onClick={() =>  toggleMobileSubmenu() }  className="account-icon-mobile__global-wrapper">

        <div className="account-icon-mobile__wrapper" >
            <StorefrontIcon className="account-icon-mobile__icon" />
            <div className="account-icon-mobile__text">Boutique</div>  
        </div>

      </div>

    
          { isShopSubmenuOpen?
            < ShopSubmenuMobile   toggleMobileSubmenu ={toggleMobileSubmenu} 
            toggleMenuHamburger={toggleMenuHamburger}/>
            :""
          }
    </>
  )
} 