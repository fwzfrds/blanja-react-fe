import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import Login from '../../pages/login/Login'
import LoginAdmin from '../../pages/loginAdmin/LoginAdmin'
import Main from '../../pages/main/Main'
import Page404 from '../../pages/notFound/Page404'
import AddProduct from '../../pages/product/addProduct/AddProduct'
import DetailProduct from '../../pages/product/detailPorduct/DetailProduct'
import EditProduct from '../../pages/product/editProduct/EditProduct'
import GetProduct from '../../pages/product/getProduct/GetProduct'
import MyProducts from '../../pages/product/productList/MyProducts'
import ProductList from '../../pages/product/productList/ProductList'
import Register from '../../pages/register/Register'
import RegisterAdmin from '../../pages/registerAdmin/RegisterAdmin'
import UserProfile from '../../pages/userDetail/UserDetail'
import AuthUser from '../../helper/isUser'
import AuthAdmin from '../../helper/isAdmin'
import IsUserLogin from '../../helper/isUserLogin'
import Checkout from '../../pages/checkout/Checkout'
import IsAdminLogin from '../../helper/isAdminLogin'

const Routers = () => {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<IsUserLogin> <Login/> </IsUserLogin>}/>
        <Route path="/get-products" element={<GetProduct />}/>
        <Route path="/product-list" element={<ProductList />}/>
        <Route path="/my-products" element={<MyProducts />}/>
        <Route path="/login-admin" element={<IsAdminLogin> <LoginAdmin/> </IsAdminLogin>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/register-admin" element={<RegisterAdmin />}/>
        <Route path="/add-product" element={<AuthAdmin> <AddProduct/> </AuthAdmin>}/>
        <Route path="/edit-product/:id" element={<AuthAdmin> <EditProduct/> </AuthAdmin>}/>
        <Route path="/detail-product/:id" element={<DetailProduct />}/>
        <Route path="/user-profile" element={<AuthUser> <UserProfile/> </AuthUser>}/>
        <Route path="/cart" element={<AuthUser> <Cart /> </AuthUser>}/>
        <Route path="/checkout" element={<AuthUser> <Checkout/> </AuthUser>}/>
        {/* <Route path="/productlist" element={<ProductList/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<DetailProduct/>}/>
        <Route path="/register" element={<Register/>}/> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers