//formatage virgules nombre backend frontend?

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux'
import { calculNumberArticle, deleteArticle, calculTotalPriceProducts,  } from '../../store/cartSlice';
import DropDownSelectQuantity from '../../components/select/dropDownSelectQuantity';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom"
import ModalConnexionOrSingupFromOrder from '../../components/modal/modalLoginOrSignup/ModalLoginOrSignupFromOrder';


export default function Order() {

  const isConnected = useSelector(state => state.user.isConnected);
  const clubChoice = useSelector(state => state.cart.clubChoice);
  const articletList = useSelector(state => state.cart.articletList);
  const totalPrice = useSelector(state => state.cart.totalPrice);

console.log(totalPrice)

  const dispatch = useDispatch();


  //ne sert qu'à envoyer une prop qui avait été défini dans les composant enfant
  const [isModalConnexionOpen, setModalConnexionOpen] = useState(false);
  const closeModalConnexion = function(){
    setModalConnexionOpen(false);
  };


  useEffect(() => {
    dispatch(calculNumberArticle(), dispatch(calculTotalPriceProducts()));
  }, []);



  return (

    <main className="order__main">

      <div className="order__bg"></div>

      <section className="order__contenair">

        {isConnected ? (

          <>

          <h1 className="order__title"> Finaliser ma commande </h1>

          <div className="order__sub-contenair">

            <div className="order__contenair-infos">

              <div className="order__contenair-info" >

                <h2 className="order__sub-title"> Retour de service </h2>

                <div className="order__little-bit-text"> Dans votre club au {clubChoice}  </div>

              </div>

              <div className="order__contenair-info" > 

                <h2 className="order__sub-title"> Moyen de paiment </h2>

              </div>

              <div className="order__contenair-info order__contenair-info-button" > 
                <Link to="/panier" className='btn btn-green btn-commander btn-cart'>
                  Je passe commande
                </Link>  
              </div>

            </div>

            <div className='order__contenair-cart'>

              <h2 className="order__sub-title"> récapitulatif </h2>

              <div className='order__cart-detail-wrapper'>

              {articletList.map((product, index) => {

                switch (product.categorie) {

                  case "fourniture et pose cordage":
                    return (

                      <div className='order-cart__product-wrapper-instal-with-string' key={index}>

                        <div className='order-cart__instal-with-string-top'>

                          <div className='order-cart__text-weight-uppercase'>  Fourniture et pose cordage </div>

                          <div className='order-cart__product-price'>
                          <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                          </div>

                        </div>

                          <div className='order-cart__content-on-one-line'>
                            <div>Pose cordage </div> 
                            <div> 11 € </div>
                          </div>

                          <div className='order-cart__content-on-one-line'>

                            <div className='order-cart__cordage'>
                              <div> Cordage : </div>
                              
                            </div>

                            <div>{product.stringChoice.price} € </div>

                          </div>

                          <NavLink 
                            key={index} 
                            to={`/fiche_produit/cordage/${product.stringChoice.id}`}
                            className="order-cart__link-to-card-product"
                          >
                            { product.stringChoice.mark  + " " + product.stringChoice.model}
                          </NavLink>

                      </div>

                    );

                  case "pose cordage seule":
                    return (

                      <div className='order-cart__product-wrapper-installation' key={index}>

                        <div className='order-cart__product-info-wrapper-left'>

                          <div className='order-cart__text-weight-uppercase'>  Pose cordage </div>

                          <div> Cordage : votre propre cordage </div>

                        </div>


                        <div className='order-cart__product-price'>
                            <div>{parseFloat((product.price * product.quantity).toFixed(2))} €</div>
                        </div>

                      </div>

                    );

                  case "balle":
                  case "accessoire":
                    return (

                      <div className='order-cart__product-wrapper' key={index}>

                        <NavLink 
                          key={index} 
                          to={`/fiche_produit/${product.categorie}/${product.id}`}
                          className="order-cart__link-to-card-product"
                        >
                          <img
                            crossOrigin="anonymous"
                            src={product.image_url}
                            alt={product.model}
                            className="order-cart__image"
                          />
                        </NavLink>

                        <div className='order-cart__product-info-wrapper'>

                          <div className='order-cart__product-info-wrapper-left'>
                            <div>
                              <div className='order-cart__text-weight-uppercase'>{product.categorie}</div>
                              <div >{product.mark}</div>
                              <div>{product.model}</div>   
                              <div> Quantité : {product.quantity}</div> 
                            </div>

                          </div>

                          <div className='order-cart__product-price'>
                            <div>{parseFloat((product.price * product.quantity).toFixed(2))} €</div>
                          </div>

                        </div>

                      </div>

                    );

                  default:
                    return null;
                }

              })}
          


              </div>

              <div className='cart-summary__total-line'>
                <div> Total </div>
                <div> {totalPrice} € </div>
              </div>

            </div>

          </div>

          </>

          ) : (

          <ModalConnexionOrSingupFromOrder 
          closeModalConnexion={closeModalConnexion}/>

          )
        }

      </section>

    </main>
  );

}





