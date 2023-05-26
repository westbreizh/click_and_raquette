import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux'
import { calculNumberArticle, deleteArticle, calculTotalPriceProducts,  } from '../../store/cartSlice';
import DropDownSelectQuantity from '../../components/select/dropDownSelectQuantity';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom"


export default function Cart() {

  const articletList = useSelector(state => state.cart.articletList);
  const numberArticle = useSelector(state => state.cart.numberArticle);
  const totalPriceProducts = useSelector(state => state.cart.totalPriceProducts);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const dispatch = useDispatch();
  function handleClickDelete (index) { 
  dispatch (deleteArticle(index))
  }

 //localStorage.clear();

  useEffect(() => {
    dispatch(calculNumberArticle(), dispatch(calculTotalPriceProducts()));
  }, [articletList]);

  console.log("article dans panier")
  console.log(articletList)


    return (

      <main className="cart__main">

        <div className="cart__bg"></div>

        <section className="cart__contenair">

          {articletList.length > 0 ? (
            <>

              <div className='cart__content'>

                <div className='cart-content__first-line'>
                  <div className="cart-content__title"> panier </div>
                  <div className='cart-content__nbre-article'>
                    {numberArticle > 1 ? `( ${numberArticle} articles )` : `( ${numberArticle} article )`}
                  </div>
                </div>
    
                {articletList.map((product, index) => {

                  switch (product.categorie) {

                    case "fourniture et pose cordage":
                      return (

                        <div className='cart-content__product-wrapper-instal-with-string' key={index}>

                          <div className='cart-content__instal-with-string-top'>

                            <div className='cart-content__text-weight-uppercase'>  Fourniture et pose cordage </div>

                            <div className='cart-content__product-price'>
                            <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                            </div>

                          </div>

                            <div className='cart-content__content-on-one-line'>
                              <div>Pose cordage </div> 
                              <div> 11 € </div>
                            </div>

                            <div className='cart-content__content-on-one-line'>

                              <div className='cart-content__cordage'>
                                <div> Cordage :</div>
                                <NavLink 
                                      key={index} 
                                      to={`/fiche_produit/cordage/${product.stringChoice.id}`}
                                      className="cart-content__link-to-card-product"
                                    >
                                      {"  " + product.stringChoice.mark + " " + product.stringChoice.model}
                                </NavLink>
                              </div>

                              <div>{product.stringChoice.price} € </div>

                            </div>
                              
                             

                            <div> Tension cordage : {product.stringRopeChoice} kg </div>

                            <div className='cart-content__wrapper-icons'>

                                <DropDownSelectQuantity
                                  quantityForOneProduct={product.quantity}
                                  indexProductInArrayCart={index}
                                />
                                <DeleteIcon 
                                  onClick={() => handleClickDelete(index) }
                                  className="cart-content__deleteIcon" 
                                />

                            </div>


                        </div>

                  


                 

                      );

                    case "pose cordage seule":
                      return (

                        <div className='cart-content__product-wrapper-installation' key={index}>

                          <div className='cart-content__product-info-wrapper-left'>

                            <div className='cart-content__text-weight-uppercase'>  Pose cordage </div>

                            <div> Cordage : votre propre cordage </div>

                            <div> Tension cordage : {product.stringRopeChoice} kg </div>

                            <div className='cart-content__wrapper-icons'>

                                <DropDownSelectQuantity
                                  quantityForOneProduct={product.quantity}
                                  indexProductInArrayCart={index}
                                />
                                <DeleteIcon 
                                  onClick={() => handleClickDelete(index) }
                                  className="cart-content__deleteIcon" 
                                />

                            </div>


                          </div>

                  
                          <div className='cart-content__product-price'>
                              <div>{parseFloat((product.price * product.quantity).toFixed(2))} €</div>
                          </div>

                        </div>

                      );

                    case "balle":
                    case "accessoire":
                      return (

                        <div className='cart-content__product-wrapper' key={index}>

                          <NavLink 
                            key={index} 
                            to={`/fiche_produit/${product.categorie}/${product.id}`}
                            className="cart-content__link-to-card-product"
                          >
                            <img
                              crossOrigin="anonymous"
                              src={product.image_url}
                              alt={product.model}
                              className="cart-content__image"
                            />
                          </NavLink>
    
                          <div className='cart-content__product-info-wrapper'>

                            <div className='cart-content__product-info-wrapper-left'>
                              <div>
                                <div className='cart-content__text-weight-uppercase'>{product.categorie}</div>
                                <div >{product.mark}</div>
                                <div>{product.model}</div>   
                              </div>

                              <div className='cart-content__wrapper-icons'>

                                <DropDownSelectQuantity
                                  quantityForOneProduct={product.quantity}
                                  indexProductInArrayCart={index}
                                />
                                <DeleteIcon 
                                  onClick={() => handleClickDelete(index) }
                                  className="cart-content__deleteIcon" 
                                />

                              </div>

                            </div>

                            <div className='cart-content__product-price'>
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
    
              <div className='cart__summary'>

                <div className='cart-summary__first-line'>
                    <div className="cart-summary__title"> récapitulatif </div>
                </div>

                <div className='cart-summary__detail-wrapper'>

                  <div className='cart-summary__number-product'>
                    <div>
                      {numberArticle > 1 ? ` ${numberArticle} articles ` : ` ${numberArticle} article `}
                    </div>
                    <div>  {totalPriceProducts} € </div>
                  </div>

                 {/* <div className='cart-summary__delivery'>
                    <div> Livraison </div>
                    <div> gratuit </div>
                  </div>*/}

                </div>

                <div className='cart-summary__total-line'>
                  <div> Total </div>
                  <div> {totalPrice} € </div>
                </div>


                <Link to="/panier" className='btn btn-green btn-commander btn-cart'>
                commander
                </Link>  



              </div>
    
            </>

          ) : (

            <div className="loadingspinnerString">
              votre panier est vide
            </div>
          )}

        </section>

      </main>
    );
}





