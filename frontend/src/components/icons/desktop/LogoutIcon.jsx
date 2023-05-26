import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { connectedToggle } from "../../../store/userSlice"; 
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function LogoutIcon(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutAction() {
    dispatch(connectedToggle()); 
    navigate("/");
  }

  // ...

  return (
    <div className="logout__wrapper" onClick={logoutAction}>
      <PowerSettingsNewIcon className="logout__icon" />
      <div className="logout__text">Déconnexion</div>
    </div>
  );
}
