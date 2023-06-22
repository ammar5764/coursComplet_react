import React from 'react'
import Header from "./Header/Header"
import Navbar from '../../components/NavBar/Navbar'
import Footer from './Footer/Footer'
import SectionPresentation from './SectionPresentation/SectionPresentation'
import Main from './Main/Main'

const Cv = () => {
    
    const [name, setName] = React.useState("Elie Sultan");

    const HandleName = (cb) => {
       setName(cb)
    }

  return (
    <div className="">
      <header>
        <Header name={name} />
        <Navbar />
      </header>

      <SectionPresentation  />
      <Main
         HandleName={HandleName}
       />

      <Footer name={name} />
    </div>
  )
}

export default Cv

