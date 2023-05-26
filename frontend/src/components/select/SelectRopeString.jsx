// amelioration du focus du menu déroulant entre 18 et 27 
// au click exterieur 

import { useState } from "react";
import { datasForSelectRopeString } from "../../Utils/localDataBase";
import { resetStringRopeChoice } from "../../store/cartSlice"; 
import { useDispatch, useSelector } from 'react-redux'


export default function SelectRopeString(props) {

  const [isOpen, setIsOpen] = useState(false);
  const stringRopeChoice = useSelector(state => state.cart.stringRopeChoice);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const ropeStringSelected = value; 
    dispatch(resetStringRopeChoice(ropeStringSelected))
  };
  
 
  return (

    <div 
      className="clubSelect__wrapper"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="clubSelect__bar-wrapper">

        <div  className="clubSelect__bar-title" >
          {stringRopeChoice}
        </div>
      
        <span className={`clubSelect__arrow ${isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down" }`}/>

      </div>

      {isOpen && (

      <div className="clubSelect__submenu-contenair scrollable-menu " >

        <ul className='clubSelect__submenu-ul'>

          {datasForSelectRopeString.map(( option) =>

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
