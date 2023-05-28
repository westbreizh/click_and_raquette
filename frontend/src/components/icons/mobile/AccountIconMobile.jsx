import { useState } from "react"
import { useSelector } from "react-redux"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountSubmenuMobile from "../../submenu/AccountSubmenuMobile"


export default function AccountIconMobile(props) {

  const toggleMenuHamburger = props.toggleMenuHamburger
  const userInfo = useSelector((state) => state.user.userInfo)
  const forename = userInfo.forename
  const [isMobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)
  function toggleMobileSubmenu() { 
      setMobileSubmenuOpen(!isMobileSubmenuOpen);  }
  
 
  return (

    <>
      <div onClick={() =>  toggleMobileSubmenu() }  className="account-icon-mobile__global-wrapper">

        <div className="account-icon-mobile__wrapper" >
            <AccountCircleIcon className="account-icon-mobile__icon" />
            <div className="account-icon-mobile__text">{forename}</div>  
        </div>

      </div>

      { isMobileSubmenuOpen?
        < AccountSubmenuMobile   toggleMobileSubmenu ={toggleMobileSubmenu} 
        toggleMenuHamburger={toggleMenuHamburger}/>
        :""
      }
      
    </>
  )
} 