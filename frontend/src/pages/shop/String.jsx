// loadproductListFiltered est appelé car le denier select de la liste se met charge tout seul ???
// problème quand on décoche toutes les options choisi il ne revient pas à sa configuration initiale ...

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useStore } from "react-redux"
import NavbarShop from "../../components/navbar/NavbarShop"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import CheckboxSelect from "../../components/select/CheckBoxSelectString"
import {datasForSelectstring} from "../../Utils/localDataBase"
import { setProductsListFromBackend } from "../../store/productSlice"
import BackNavArrow from '../../components/button/BackNavArrow'
import { setCategorieWithOptionSelectedForString } from "../../store/productSlice";


export default function String() {

  const [productFind, setProductFind] = useState(true)
  const productsListFromBackend = useSelector((state) => state.product.productsListFromBackend);
  const categorieWithOptionSelectedForString = useSelector((state) => state.product.categorieWithOptionSelectedForString);
  const store = useStore()
  const productCategorie ="string"

  console.log(categorieWithOptionSelectedForString)

  //fonction asynchrone vers le backend pour recupérer 
  //une liste des marques de cordages de manière aléatoire
  const loadProductListRandom = async function (data) {
    try{
      const response = await fetch(`http://localhost:3001/api/shop/productListRandom`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie:"string" }),
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
      const response = await fetch(`http://localhost:3001/api/shop/stringListFiltered`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie, categorieWithOptionSelectedForString }),
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
  }, [categorieWithOptionSelectedForString ]);

  // charger une liste de cordages aléatoires au chargement de la page
  useEffect(() => {
    loadProductListRandom ()
  },[])

  // rénitialise à zéro les options choisies précédemment quand on revient sur la page
  useEffect(() => {
    store.dispatch( setCategorieWithOptionSelectedForString([]));
  },[])
  

  return (

    <>

      <NavbarShop  />

      <main className="shop__main">

        <div className="shop__bg"> </div>

        <section className="  shop__contenair">

          <BackNavArrow />

          <h1 className="title-products-string"> Cordages</h1>

          <div className="shop__text-info">  
            Le choix du cordage peut se révéler aussi important et complexe que celui de la raquette.<br/>
            Pour avoir plus d'informations et un choix plus large de cordages, nous vous conseillons 
            le site <a href="https://www.templeducordage.com/" target="_blank">templeducordage</a>.
          </div>


          <div className="checkboxSelects__wrapper">

            {datasForSelectstring.map((object, index) => (

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

            {categorieWithOptionSelectedForString.map((object, index) => (

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
                  to={`/fiche_produit/cordage/${product.id}`}
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
              <div className="message-product-not-find">Il n'y a aucun cordage correspondant aux options choisies !</div>
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





