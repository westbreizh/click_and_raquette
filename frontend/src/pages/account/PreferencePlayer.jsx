import { Link } from "react-router-dom"
import { useState } from 'react'
import { useSelector } from "react-redux"

import NavbarAccount from "../../components/navbar/NavbarAccount"






export default function PreferencePlayer() {







  return (

  <>
      <NavbarAccount />

      <main className="account__main">

        <div className="account__bg"> </div>

        <section className="account__contenair">



              <h1 className="account__header__h1">
                Préférences joueur
              </h1>


      
        </section>

      </main>

  </>
    
  )
}