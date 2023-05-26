import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import NavbarShop from '../../components/navbar/NavbarShop'
import BackNavArrow from '../../components/button/BackNavArrow';
import OrderButton from '../../components/button/OrderButton';
import ProductQuantitySelect from '../../components/button/ProductQuantitySelect';
import TennisSpinner from '../../components/loadingSpinner/TennisSpinner';


export default function ProductAccessoriesPage() {

  // on récupère l'id dans l'url de la page
  const { productId} = useParams();
  const [productSelected, setProductSelected] = useState([])
  const [productQuantity, setProductQuantity] = useState(1)
  const productWithQuantity = { ...productSelected[0], quantity: productQuantity }

  //fonction asynchrone vers le backend pour recupérer 
  //le produit sélectionner grâce à son id et sa catégorie
  const loadProductSelected  = async function (data) {
    try{
      const response = await fetch(`http://localhost:3001/api/shop/productSelected`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ productCategorie: "accessories", productId: productId }),
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        console.log(result.message);
        console.log(result.productSelected);
        setProductSelected(result.productSelected);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  //pour lancer la fonction au chargement de la page
  useEffect(() => {
  loadProductSelected();
  }, []);

  //  on l'affecte le resultat du backend à la variable initialisé product
  let product = null;
  if (productSelected.length > 0) {
    product = productSelected[0];
  }


  return (

    <>

      <NavbarShop />
      
      <main className="product__main">

        <div className="product__bg"> </div>

        <section className="product__contenair">

        {productSelected.length > 0 ? 

          (
            <>
              <BackNavArrow />

              <h1 className="title-product"> Accessoire - {product.mark} - {product.model} </h1>

              <div className='product-card__contenair'>

                <div className='product-card__image-wrapper'>

                  <img 
                    crossOrigin="anonymous" 
                    src={product.image_url} 
                    alt={product.model} 
                    className="product-card__image"
                  />

                </div>

                <div className='product-card__info-and-order-wrapper'>

                  <div className='product-card__info-wrapper'>

                    <div className='product-card__info-first-line-wrapper'>

                      <img 
                        crossOrigin="anonymous" 
                        src={product.logoMark_url} 
                        alt={product.mark} 
                        className="product-card__image-logo"
                        />

                      <div> {product.model}</div>

                    </div>

                    <div className='product-card__info-description-text'>
                    {product.description_text} 
                    </div>

                  </div>

                  <div className='product-card__order-wrapper'>

                    <div className='product-card__order-price'>
                      {product.price} €
                    </div>

                    <div className='product-card__order-quantity-wrapper'>

                      <div className='product-card__order-quantity-text'>
                        Quantité
                      </div>

                      <ProductQuantitySelect 
                      productQuantity = {productQuantity}
                      setProductQuantity = {setProductQuantity}
                      />
                    </div>

                    <div className='product-card__order-button'>

                      <OrderButton 
                        productWithQuantity={productWithQuantity}
                      />

                    </div>

                  </div>
                  
                </div>

              </div>

            </>
         ) :

         (
            <div className="loadingspinnerString">
            <TennisSpinner />
            </div>
          )

        }

        </section>

      </main>

    </>
  );
}
