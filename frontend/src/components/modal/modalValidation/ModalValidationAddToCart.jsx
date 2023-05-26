import {  useSelector} from 'react-redux'
import {createPortal} from 'react-dom'
import { Link } from 'react-router-dom';

export default function ModalValidationAddToCart( props) {

  const product = props.productWithQuantity
  const setSubmenuValidation = props.setSubmenuValidation
  const cart = useSelector(state => state.cart.articleList);

  console.log("produit ajouté")
  console.log(product )
  console.log("panier"  )
  console.log(cart )


  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper modal-atc__wrapper">

          <div className='modal-atc__message-wrapper'>  {/*atc pour add to cart*/}

            <div className="modal-atc__validation-bubble-checked">
              <span>&#10003;</span>
            </div>

            <div className='modal-atc__message-text'>
            {product.quantity>1? "Articles ajouté au panier !": "Article ajouté au panier !"}
            </div>

            <button
              type="button"
              className="btn-close-atc"
              aria-label="Close"
              onClick={() => setSubmenuValidation(false)}
            >
              <span >&times;</span>

            </button>

          </div>


          <div className='modal-atc__product-wrapper'>
            
            <img 
              crossOrigin="anonymous" 
              src={product.image_url} 
              alt={product.model} 
              className="modal-atc__image"
            />

            <div className='modal-atc__product-info-wrapper'> 
              <div>{product.mark}</div>
              <div>{product.model}</div>
              <div>{product.price} €</div>
            </div>

          </div>

          <div className='modal-atc__buttons-link-wrapper'>

            <Link to="/panier" className='btn btn-white-green'>
              voire le panier
            </Link>  

            <Link to="/panier" className='btn btn-green '>
              commander
            </Link>  
            
          </div>


        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );

} 