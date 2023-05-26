//il y a des prix dans le local storage , securité ??

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

// Combiner les différents reducers en un seul rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

// Configuration pour redux-persist
const persistConfig = {
  key: "data", // La clé pour stocker les données dans le local storage
  storage, // Le type de stockage (ici, on utilise le local storage)
  whitelist: [ "user", "cart"], // Permet de sélectionner les slices à sauvegarder
};

// Utilisation de persistReducer pour créer un reducer qui supporte le local storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store avec le reducer persistant
export const store = configureStore({ reducer: persistedReducer });

// Création d'un persistor qui permet de sauvegarder automatiquement le store dans le local storage
export const persistor = persistStore(store);
