import { useDispatch } from 'react-redux'
import { addArticle, calculNumberArticle } from "../../store/cartSlice"
import { useState } from 'react';
import ModalValidationAddToCart from '../modal/modalValidation/ModalValidationAddToCart';


export default function OrderStringingButton(props) {


  const [isSubmenuValidationOpen, setSubmenuValidation]= useState(false)
  const dispatch = useDispatch();
  const stringingWithString  =props.stringingWithString 

  const handleAddToCart = () => {
    dispatch(addArticle(stringingWithString))
    setSubmenuValidation(true);
    dispatch(calculNumberArticle());
  }
  

  return (

    <>

      <button 
      className="btn btn-green"
      onClick={handleAddToCart} >
        Ajouté au panier 
      </button>

      {isSubmenuValidationOpen && 
        <ModalValidationAddToCart 
        stringingWithString={stringingWithString}
        setSubmenuValidation={setSubmenuValidation}
      />
      }

    </>
  )

}


