import ArrowBackIcon from '@mui/icons-material/ArrowBack'


export default function BackNavSubmenu(props) {

  const toggleMobileSubmenu = props.toggleMobileSubmenu

  return(
    <div className="submenuMobile__wrapper-back" onClick={() => toggleMobileSubmenu()}>
        <div className='submenuMobile__bubble-back'>
            <ArrowBackIcon className="submenuMobile__icon-back"/>
        </div>
        <div className="submenuMobile__text-back">retour</div>
    </div>
  )
}

