import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainRoutes from '../../routes/routes'

const Layout = () => {
  return (
    <>
    <Header/>
    <div>
        <MainRoutes/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout