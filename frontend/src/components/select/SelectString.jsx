import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { resetStringChoice } from "../../store/cartSlice";

export default function SelectString(props) {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (

    <div 
      className="clubSelect__wrapper"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="clubSelect__bar-wrapper">

        <div  className="clubSelect__bar-title" >
         Choisissez ou fournissez votre cordage
        </div>
      
        <span className={`clubSelect__arrow ${isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down" }`}/>

      </div>

      {isOpen && (

        <div className="clubSelect__submenu-contenair" >

          <ul className='clubSelect__submenu-ul'>

            <li className="clubSelect__submenu-li">
              <Link className="li-choose-string" to="/cordages">
                je choisis mon cordage
              </Link>
            </li>

            <li
              className="clubSelect__submenu-li"
              onClick={() => {
                dispatch(resetStringChoice( [{id: "cordage fourni par le joueur" }]));  
              }}
            >

              <div>je fournis mon propre cordage</div>
                
            </li>

          </ul>

        </div>

      )}

    </div>
      
  );
}
