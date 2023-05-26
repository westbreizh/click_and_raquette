import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { connectedToggle } from "../../../store/userSlice"; 
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function LogoutIconMobile(props) {

  const toggleMenuHamburgerAndSubmenu=props.toggleMenuHamburgerAndSubmenu
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  
  function logoutAction() {
    toggleMenuHamburgerAndSubmenu();
    dispatch(connectedToggle()); 
    navigate("/");

  }


    return (

      <div className="logout__wrapper" onClick={logoutAction}  >
          <PowerSettingsNewIcon className="logout__icon" />
          <div className="logout__text">Déconnexion</div>
      </div>

    )
}




