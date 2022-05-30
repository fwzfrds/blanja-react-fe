import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/login/Login";
import LoginAdmin from "./pages/loginAdmin/LoginAdmin";
import Main from "./pages/main/Main";
import Page404 from "./pages/notFound/Page404";
import AddProduct from "./pages/product/addProduct/AddProduct";
import DetailProduct from "./pages/product/detailPorduct/DetailProduct";
import EditProduct from "./pages/product/editProduct/EditProduct";
import GetProduct from "./pages/product/getProduct/GetProduct";
import ProductList from "./pages/product/productList/ProductList";
import Register from "./pages/register/Register";
import RegisterAdmin from "./pages/registerAdmin/RegisterAdmin";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/get-products" element={<GetProduct />}/>
        <Route path="/product-list" element={<ProductList />}/>
        <Route path="/login-admin" element={<LoginAdmin />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/register-admin" element={<RegisterAdmin />}/>
        <Route path="/add-product" element={<AddProduct />}/>
        <Route path="/edit-product/:id" element={<EditProduct />}/>
        <Route path="/detail-product/:id" element={<DetailProduct />}/>
        {/* <Route path="/productlist" element={<ProductList/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<DetailProduct/>}/>
        <Route path="/register" element={<Register/>}/> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
