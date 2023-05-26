import { useState } from "react"
import { useSelector } from "react-redux"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountSubmenu from "../../submenu/AccountSubmenu"


export default function AccountIcon(props) {

  const userInfo = useSelector((state) => state.user.userInfo)
  const forename = userInfo.forename

  const [isSubmenuAccountOpen, setSubmenuAccountOpen] = useState(false)
  const [classNameWrapperAccountIcon, setclassNameWrapperAccountIcon] = useState("icon__wrapper__noSelected")



  function toogleSubmenuOn () { 
    if (!isSubmenuAccountOpen) {
      setclassNameWrapperAccountIcon("icon__wrapper__selected");
      setSubmenuAccountOpen(!isSubmenuAccountOpen);
    }
  }

  function toogleSubmenuOff () { 
    if (isSubmenuAccountOpen) {
      setclassNameWrapperAccountIcon("icon__wrapper__noSelected");
      setSubmenuAccountOpen(!isSubmenuAccountOpen);
    }
  }
  //onMouseLeave={()=> toogleSubmenuOff()}       

  return (
    
    <div className="icon-submenu__wrapper"
    onMouseEnter={() => toogleSubmenuOn()}
    onClick={() => toogleSubmenuOff() }
    onMouseLeave={()=> toogleSubmenuOff()}
    >

      <div  className={classNameWrapperAccountIcon} >
          <AccountCircleIcon className="accountIcon" />
          <div className="text-accountIcon">{forename}</div>  
      </div>

      { isSubmenuAccountOpen?
        <AccountSubmenu isSubmenuOpen= {isSubmenuAccountOpen}  toogleSubmenuOff ={toogleSubmenuOff}/>
        :""
      }

    </div>
  )
} 