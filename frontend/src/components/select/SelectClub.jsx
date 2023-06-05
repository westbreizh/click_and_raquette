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





/*
  //fonction asynchrone vers le backend enregistrant les choix relatifs aux cordages de  l'utilisateur
  const clubListLoading = async function (userEmail, clubChoice, stringRopeChoice, stringChoice ) {
    try{

      const response = await fetch(`http://localhost:3001/api/club/clubList`, {
        mode: "cors",
        method: "POST",
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
          const result = await response.json();
          console.log(result)
          const clubList = result.clubList
          console.log(clubList)
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  // charger une liste de cordages aléatoires au chargement de la page
  useEffect(() => {
    clubListLoading ()
  },[])
  */