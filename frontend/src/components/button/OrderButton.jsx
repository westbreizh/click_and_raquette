import { useDispatch } from 'react-redux'
import { addArticle, calculNumberArticle } from "../../store/cartSlice"
import { useState } from 'react';
import ModalValidationAddToCart from '../modal/modalValidation/ModalValidationAddToCart';


export default function OrderButton(props) {


  const [isSubmenuValidationOpen, setSubmenuValidation]= useState(false)
  const dispatch = useDispatch();
  const productWithQuantity  =props.productWithQuantity 

 


  const handleAddToCart = () => {
    dispatch(addArticle(productWithQuantity))
    setSubmenuValidation(true)
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
      productWithQuantity={productWithQuantity}
      setSubmenuValidation={setSubmenuValidation}
      />
      }

    </>
  )

}


