import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'

const Intro = () => {
    const exempleCode = ` <Route path="/PresUseRef" element={<PresUseRef />} />`

  return (
    <>
    <NavbarOffCanva />
    <div className='container'>
      <h1>Router Introduction</h1>
      <h6>Comment creer une route ?</h6>
      <p>1) Tout d'abord, nous allons creer nos fichiers, si c'est un component, alors nous irons dans component, si c'est une page, nous la creerons dans page</p>
      <p>1) dans app.js on importe cette page</p>
      <p>2) on va creer  {exempleCode} a l'interieur de nos route ( mais avant le lien de la page 404)   </p>
      <p>3) on ira dans notre navbar on recopiant scrupuleusement le path pour le coller dan s le lien de notre Navbar </p>
    </div>
    </>
  )
}

export default Intro
