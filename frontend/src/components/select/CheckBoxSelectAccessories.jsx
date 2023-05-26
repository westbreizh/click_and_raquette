/*prevOptions est une variable qui représente la valeur précédente de l'état optionSelectedForOneCategorie avant la mise à jour. Cette variable est définie en tant que paramètre de la fonction de rappel passée à setOptionSelectedForOneCategorie.
Lorsque vous utilisez useState, la fonction useState renvoie un tableau contenant deux éléments : le premier est la valeur actuelle de l'état, et le deuxième est une fonction qui vous permet de mettre à jour cet état. La valeur actuelle de l'état est initialement définie lors de la première exécution du composant et peut être modifiée à tout moment en appelant la fonction de mise à jour retournée par useState.
Lorsque vous appelez la fonction de mise à jour, vous pouvez passer une nouvelle valeur pour l'état, ou vous pouvez passer une fonction de rappel qui prend la valeur précédente de l'état comme paramètre et renvoie la nouvelle valeur de l'état. Dans ce cas, la fonction de rappel est utilisée pour calculer la nouvelle valeur de optionSelectedForOneCategorie en fonction de la valeur précédente. */

import { useState, useEffect } from 'react';
import { useSelector, useStore } from "react-redux"
import { setCategorieWithOptionSelectedForAccessories } from "../../store/productSlice"


export default function CheckboxSelect(props) {

  const options= props.options
  const title  = props.title
  const fieldNameBdd = props.fieldNameBdd
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelectedForOneCategorie, setOptionSelectedForOneCategorie] = useState([]); 
  const store = useStore()
  const categorieWithOptionSelectedForAccessories = useSelector((state) => state.product.categorieWithOptionSelectedForAccessories);


  // fonction appelé lorsque que l'on coche une case
  //fonction dresetSelectComposante mise à jour des option selectionné pour la categorie du select
  function uploadOptionsSelectLocal(newOption) {
    setOptionSelectedForOneCategorie((prevOptions) => {
      // on enlève l'option lorsqu'on décoche
      if (prevOptions.includes(newOption)) {
        return prevOptions.filter((item) => item !== newOption);
      }
      // on ajoute l'option lorsqu'on coche
      else {
        return [...prevOptions, newOption];
      }
    });
  }
  
  //fonction de mise à jour des options selectionné pour l 'envoie au backend
  function uploadOptionsSelectForBackend () {

    //on regarde si on déjà la categorie dans le tableau redux
    const existingOptionIndex = categorieWithOptionSelectedForAccessories.findIndex(
      option => option.fieldNameBdd === fieldNameBdd
    );

    // on a dejà la categorie
    if (existingOptionIndex !== -1) {
      // on reprend la valeur du store redux
      const updatedoptionSelectedForOneCategorieForBackend = [...categorieWithOptionSelectedForAccessories];
      // on remplace les options pour la categorie trouvé dans existingOptionIndex
      updatedoptionSelectedForOneCategorieForBackend[existingOptionIndex] = {
        fieldNameBdd,
        optionSelectedForOneCategorie
      };

    store.dispatch( setCategorieWithOptionSelectedForAccessories(updatedoptionSelectedForOneCategorieForBackend));
    } 
    
      // on ajoute une nouelle categorie avec ses options
    else {
      store.dispatch( setCategorieWithOptionSelectedForAccessories([
        ...categorieWithOptionSelectedForAccessories,
        { fieldNameBdd, optionSelectedForOneCategorie }
      ]));
    }
  }

  // fonction appelé lorsque que l'on coche une case
  function handleOptionClick(option) {
    setIsOpen(false) ;
    uploadOptionsSelectLocal(option);

  }


  // une fois sateState effectué on met à jour les données pour le backend
  useEffect(() => {
    uploadOptionsSelectForBackend();
  }, [optionSelectedForOneCategorie]);

  return (

      <div 
        className="checkBoxSelect__wrapper"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >

        <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="checkBoxSelect__title" >
          {title}
          <span
          className={`checkBoxSelect__arrow ${
            isOpen ? "checkBoxSelect__arrow-up" : "checkBoxSelect__arrow-down"
          }`}
          />
        </div>

        {isOpen && (
        <div className="checkBoxSelect__submenu-contenair" >

          <ul 

          className='checkBoxSelect__submenu-ul'>
            {options.map((option) => (

              <li key={option} className="checkBoxSelect__submenu-li">
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  checked={optionSelectedForOneCategorie.includes(option)}
                  onChange={() => handleOptionClick(option)}
                />
                <label 
                className='checkBoxSelect__option-label'
                htmlFor={option}>
                  {option}</label>
              </li>
            ))}
          </ul>

        </div>
        )}
      </div>

  );
}


