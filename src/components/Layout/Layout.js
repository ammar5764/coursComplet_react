import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../../pages/Cv/Footer/Footer'

const Layout = ({children, footer}) => {
  return (
    <>
    <Navbar/>
    {children}
    {footer === true  &&
     <Footer />
    }
   
    </>
  )
}

export default Layout
