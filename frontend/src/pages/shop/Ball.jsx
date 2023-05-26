// loadproductListFiltered est appelé car le denier select de la liste se met charge tout seul ???
// problème quand on décoche toutes les options choisi il ne revient pas à sa configuration initiale ...


import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useStore } from "react-redux"
import NavbarShop from "../../components/navbar/NavbarShop"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import CheckboxSelect from "../../components/select/CheckBoxSelectBall"
import BackNavArrow from '../../components/button/BackNavArrow'
import {datasForSelectsBall} from "../../Utils/localDataBase"
import { setProductsListFromBackend } from "../../store/productSlice"
import { setCategorieWithOptionSelectedForBall } from "../../store/productSlice"

export default function Ball() {

  const [productFind, setProductFind] = useState(true)

  const productsListFromBackend = useSelector((state) => state.product.productsListFromBackend);
  const categorieWithOptionSelectedForBall = useSelector((state) => state.product.categorieWithOptionSelectedForBall);
  const store = useStore()

  console.log(categorieWithOptionSelectedForBall)

  //fonction asynchrone vers le backend pour recupérer 
  //une liste des marques de cordages de manière aléatoire
  const loadProductListRandom = async function (data) {
    try{
      const response = await fetch(`http://localhost:3001/api/shop/productListRandom`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie:"ball" }),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        console.log(result.message);
        store.dispatch(setProductsListFromBackend(result.stringListRandom));
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  //fonction asynchrone vers le backend pour recupérer 
  //la liste des marques de cordages en filtrant avec des options fournit
  const loadproductListFiltered  = async function (data) {
    try{
      const response = await fetch(`http://localhost:3001/api/shop/ballListFiltered`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie:"ball", categorieWithOptionSelectedForBall }),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        if(result.message === "il n' y a pas de produits correspondant aux options choisis")
          {setProductFind(false)
          }else {setProductFind(true)};
        console.log(result.message);
        store.dispatch(setProductsListFromBackend(result.stringList));
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


   // quand des options sont selectionnés, on lance la fonction de filtrage du backend
   useEffect(() => {
    loadproductListFiltered();
  }, [categorieWithOptionSelectedForBall ]);

  // charger une liste de balles aléatoires et on réinitialise les options au chargement de la page
  useEffect(() => {
    loadProductListRandom ()
  },[])

  // rénitialise à zéro les options choisies précédemment quand on revient sur la page
  useEffect(() => {
    store.dispatch( setCategorieWithOptionSelectedForBall([]));
  },[])


  
  return (

    <>

      <NavbarShop  />

      <main className="shop__main">

        <div className="shop__bg"> </div>

        <section className="shop__contenair">

          <BackNavArrow />

          <h1 className="title-products"> Balles</h1>
          

          <div className="checkboxSelects__wrapper">

            {datasForSelectsBall.map((object, index) => (

            <CheckboxSelect 
            key={`${object}-${index}`}
            className="checkboxSelect"
            options = {object.options}
            title = {object.title}
            fieldNameBdd= {object.fieldNameBdd}
            />
            ))}

          </div>
          
          <div className="options-selected-wrapper">  

            {categorieWithOptionSelectedForBall.map((object, index) => (

              <div 
              className="options-selected-wrapper__one-categorie"
              key={index}>

                  {object.optionSelectedForOneCategorie.map((option, index) => (
                    <div key={index}
                    className="options-selected"
                    >
                      {option}</div>
                  ))}

              </div>

            ))}

          </div>
 

          {productsListFromBackend.length > 0 ? (

            <div className="cardProducts__contenair">

              {productsListFromBackend.map((product, index) => (
                <NavLink 
                  key={index} 
                  to={`/fiche_produit/balle/${product.id}`}
                  className="cardProduct__wrapper"
                >
                  <img 
                    crossOrigin="anonymous" 
                    src={product.image_url} 
                    alt={product.model} 
                    className="cardProduct__image"
                  />
                  <div className="cardProduct__nameMark">{product.mark}</div>
                  <div className="cardProduct__model">{product.model}</div>
                  <div className="cardProduct__packaging">{product.packaging}</div>
                  <div className="cardProduct__price">{product.price} €</div>
                </NavLink>
                ))}

            </div>

            ) : (

            <>
            {!productFind ? (
              <div className="message-product-not-find">Il n'y a aucune balles correspondant aux options choisies !</div>
            ) : (
              <div className="loadingspinnerString">
              <TennisSpinner />
              </div>
            )}
            </>
          )}

        </section>

      </main>

    </>
    )
}