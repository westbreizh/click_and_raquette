import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom';


export default function BackNavArrow() {

  const navigate = useNavigate();
  
  function handleBackClick() {
    navigate(-1); // Navigue vers la page précédente
  }

  return(

    <div className="btn-back__wrapper" onClick={handleBackClick}>

        <div className='btn-back__bubble'>
            <ArrowBackIcon className="btn-back__icon-back"/>
        </div>

    </div>
    
  )
}

