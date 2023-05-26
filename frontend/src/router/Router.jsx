import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import Home from '../pages/home/Home'
import Signup from '../pages/singup/Singup'
import Coordinate from '../pages/account/Coordinate'
import PreferencePlayer from '../pages/account/PreferencePlayer'
import OrderHistory from '../pages/account/OrderHistory'
import Stringing from '../pages/stringing/Stringing'
import String from '../pages/shop/String'
import Ball from '../pages/shop/Ball'
import Accessories from '../pages/shop/Accessories'
import ProductStringPage from '../pages/shop/ProductStringPage'
import ProductBallPage from '../pages/shop/ProductBallPage'
import ProductAccessoriesPage from '../pages/shop/ProductAccessoriesPage'
import Cart from '../pages/cart/Cart'
import ErrorPage from '../pages/errorPage/ErrorPages'


export default function Router() {


  return (

    <BrowserRouter scrollBehavior="smooth">
      
      <ScrollToTop />
      <Header />

      <Routes >

          <Route path='/click-raquette' element={<Home />} />
          <Route path='/inscription'  element = {< Signup/>} />
          <Route path='/cordez'  element = {<Stringing />} />
          <Route path='/cordages'  element = {<String />} />
          <Route path="/fiche_produit/cordage/:productId"  element = {<ProductStringPage />} />
          <Route path='/balles'  element = {<Ball />} />
          <Route path="/fiche_produit/balle/:productId"  element = {<ProductBallPage />} />
          <Route path='/accessoires'  element = {<Accessories />} />
          <Route path="/fiche_produit/accessoire/:productId"  element = {<ProductAccessoriesPage />} />
          <Route path='/panier'  element = {< Cart/>} />
          <Route path='/coordonnées'  element = {< Coordinate/>} />
          <Route path='/préférences_joueur'  element = {< PreferencePlayer/>} />
          <Route path='/historique_commandes' element={<OrderHistory />} />
          <Route path='/*' element={<ErrorPage />} />
      
      </Routes>

      <Footer/>

    </BrowserRouter>

  )
}


