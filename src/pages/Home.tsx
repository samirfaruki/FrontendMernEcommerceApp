/* eslint-disable prettier/prettier */
import React from 'react'
import NavBar from '../features/navbar/NavBar'
import Product from '../features/product-list/components/ProductList'

const Home = () => {
  return (
    <NavBar>
        <Product></Product>
    </NavBar>
  )
}

export default Home