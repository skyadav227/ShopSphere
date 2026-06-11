import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Products from '../Pages/Products.jsx'
import Contact from '../Pages/Contact.jsx'
import ProductsList from '../Features/Productslist/ProductsList'
import SingleProduct from '../Features/Productslist/SingleProduct'
import Cart from '../Pages/Cart.jsx'
import About from '../Pages/About.jsx'
import Home from '../Pages/Home.jsx'
import Signup from '../Features/Authentication/Signup.jsx'
import Login from '../Features/Authentication/Login.jsx'
import Account from '../Pages/Account.jsx'

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Products/:id' element={<SingleProduct />} />
        <Route path='/' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Account' element={<Account />} />

      </Routes>
    </>
  )
}
