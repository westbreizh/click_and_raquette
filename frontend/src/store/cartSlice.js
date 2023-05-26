import { createSlice } from "@reduxjs/toolkit";


// Créez une slice pour le panier
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    articletList: [], // comprend les balles et accessoires
    numberArticle: 0, // comprend tous les éléments articletList et installationWithStringList
    totalPriceProducts: 0,
    priceDelivery: 0,
    totalPrice: 0,
    clubChoice:"Choisissez votre club",
    stringChoice:[{id: "choisissez votre cordage" }],
    stringRopeChoice:"Choisissez votre tension",
  },

  reducers: {

     // Action pour ajouter des articles aux panier
    addArticle: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.articletList.find(
        (product) => product.id === newProduct.id
      );

      
    // Si le produit existe déjà dans le panier, augmenter la quantité
    if (existingProduct) {
      existingProduct.quantity += newProduct.quantity;
    } else {
      // Sinon, ajouter le produit à la liste du panier
      state.articletList.push(newProduct);
    }
  },

    // Action pour ajouter une pose cordage (avec ou sans fourniture du cordage)
    addInstallationString: (state, action) => {
    const newProduct = action.payload;
    state.articletList.push(newProduct);
    },


    // Action pour supprimer un article du panier
    deleteArticle: (state, action) => {
      const index = action.payload;
      state.articletList.splice(index, 1);
    },



    // Action pour changer la quantité d'un produit dans le panier
    changeQuantityArticle: (state, action) => {
      const { quantity, index } = action.payload;
      const product = state.articletList[index];

      if (product) {
        
        product.quantity = quantity;
      }
    },

    // Action pour calculer le nombre de produits dans.articletList et l'enregistrer dans numberProduct
    calculNumberArticle: (state) => {
      state.numberArticle = state.articletList.reduce(
        (total, article) => total + article.quantity,
        0
      ) ;
    },

    // Action pour calculer le prix du panier
    calculTotalPriceProducts: (state) => {
      const totalPrice = state.articletList.reduce(
        (total, article) => total + article.price * article.quantity,
        0
      );
      const roundedPrice = Math.round(totalPrice * 100) / 100;
      state.totalPriceProducts = roundedPrice % 1 === 0 ?
       parseInt(roundedPrice) : parseFloat(roundedPrice.toFixed(2));
      state.totalPrice = state.totalPriceProducts + state.priceDelivery;
    },


    // Action pour réinitialiser la valeur de clubChoice
    resetClubChoice: (state, action) => {
      state.clubChoice = action.payload;
    },

    // Action pour réinitialiser la valeur de stringChoice
    resetStringChoice: (state, action) => {
      state.stringChoice = action.payload;
    },

    // Action pour réinitialiser la valeur de stringRopeChoice
    resetStringRopeChoice: (state, action) => {
      state.stringRopeChoice = action.payload;
    },
    
  },
});


export const {

  addArticle,
  addInstallationString,
  changeQuantityArticle,
  calculTotalPriceProducts,
  calculNumberArticle,
  deleteArticle,
  deleteInstallationWithString,
  deleteInstallationAlone ,
  resetClubChoice,
  resetStringChoice,
  resetStringRopeChoice,
} = cartSlice.actions;



export default cartSlice.reducer;



