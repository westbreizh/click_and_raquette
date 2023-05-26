import { useState } from "react"
import ShopSubmenu from "../../submenu/ShopSubmenu"
import StorefrontIcon from '@mui/icons-material/Storefront';


export default function ShopIcon(props) {



  const [  isSubmenuShopOpen, setSubmenuShopOpen] = useState(false)
  const [classNameWrapperShopIcon, setclassNameWrapperShopIcon] = useState("icon__wrapper__noSelected")

  

  function toogleSubmenuOn () { 
    if (!  isSubmenuShopOpen) {
      setclassNameWrapperShopIcon("icon__wrapper__selected");
      setSubmenuShopOpen(!  isSubmenuShopOpen);
    }
  }

  function toogleSubmenuOff () { 
    if (  isSubmenuShopOpen) {
      setclassNameWrapperShopIcon("icon__wrapper__noSelected");
      setSubmenuShopOpen(!  isSubmenuShopOpen);
    }
  }
      //    onMouseLeave={()=> toogleSubmenuOff()}   

  return (
    
    <div className="icon-submenu__wrapper"
    onMouseEnter={() => toogleSubmenuOn()}
    onMouseLeave={()=> toogleSubmenuOff()} 
    >

      <div  className={classNameWrapperShopIcon} >
          <StorefrontIcon className="accountIcon" />
          <div className="text-accountIcon">boutique</div>  
      </div>

      {   isSubmenuShopOpen?
        <ShopSubmenu isSubmenuOpen= {  isSubmenuShopOpen} classNameWrapperShopIcon = {classNameWrapperShopIcon} toogleSubmenuOff ={toogleSubmenuOff}/>
        :""
      }

    </div>
  )
} 