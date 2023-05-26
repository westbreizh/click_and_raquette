import { useState } from "react";
import { datasForSelectClub } from "../../Utils/localDataBase";
import { resetClubChoice } from "../../store/cartSlice"; 
import { useDispatch, useSelector } from 'react-redux'


export default function SelectClub(props) {

  const [isOpen, setIsOpen] = useState(false);
  const clubChoice = useSelector(state => state.cart.clubChoice);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const clubSelected = value; 
    dispatch(resetClubChoice(clubSelected))
  };
  
 
  return (

    <div 
      className="clubSelect__wrapper"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="clubSelect__bar-wrapper">

        <div  className="clubSelect__bar-title" >
          {clubChoice}
        </div>
      
        <span className={`clubSelect__arrow ${isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down" }`}/>

      </div>

      {isOpen && (

      <div className="clubSelect__submenu-contenair" >

        <ul className='clubSelect__submenu-ul'>

          {datasForSelectClub.map(( option) =>

            <li key={option.value} 
            className="clubSelect__submenu-li"  
            onClick={() => handleChange(option.value)}>
              {option.value} 
            </li>

          )}

        </ul>

      </div>
      )}

    </div>
      
  );
}
