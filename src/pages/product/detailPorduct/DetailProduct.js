import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const DetailProduct = () => {

    const {id} = useParams()
    const [productData, setProductData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
            console.log('Fetching Data...')
            const result = await axios.get(`http://localhost:5000/v1/products/detail/${id}`)
            // console.log(result.data.data);
            setProductData(result.data.data)
        } catch (error) {
            console.log(error);
            console.log('Fetch Data Error!');
        }
      }
      fetchData()
    }, [])

    console.log(productData);
    // console.log(productData.image);
    const img = productData.image
    console.log(img);
    // console.log(URL.createObjectURL(img));

    return (
        <div className='container mt-5'>
            <h3>Detail Product</h3>
            <div className="card" style={{ width: 400 }}>
                <img src={productData.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{productData.name}</h5>
                        <h5 className="card-text">{productData.price}</h5>
                        <p className="card-text">{productData.description}</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
            </div>
        </div>
    )
}

export default DetailProduct