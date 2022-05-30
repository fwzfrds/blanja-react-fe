import React from 'react'
import Navbar from '../../components/module/navbar/Navbar'
import {Link} from 'react-router-dom'
import GetProduct from '../product/getProduct/GetProduct';

const Main = () => {

  return (
    <>
        <Navbar />
        <GetProduct />
    </>
  )
}

export default Main