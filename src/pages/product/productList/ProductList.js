import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import Button from '../../../components/base/button/button';
import LinkButton from '../../../components/base/linkButton/LinkButton';

const ProductList = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [authToken, setAuthToken] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('BlanjaToken')
        setAuthToken(token)
    }, []);

    const fethData = async () => {
        try {
            const result = await axios.get('http://localhost:5000/v1/products/')
            console.log(result.data);
            setData(result.data.data)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
        console.log('Get Products Success!');
    }

    useEffect(() => {
        console.log('Fetching The Data ...');
        fethData()
    }, [])

    const deleteProductById = async (e, id) => {
        e.preventDefault()

        let thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting...";

        try {
            const result = await axios.delete(`http://localhost:5000/v1/products/${id}`, {
                headers: { Authorization: `Bearer ${authToken}` }
            })
            swal({
                title: "Success",
                text: 'Delete Product Success',
                icon: "success",
                button: "OK!",
            });
            thisClicked.closest("tr").remove();
        } catch (error) {
            console.log(error.response.data.message);
            swal({
                title: "Error",
                text: `${error.response.data.message}`,
                icon: "warning",
                button: "close",
            });
            thisClicked.innerText = "Delete";
            navigate('/login-admin')
        }
    }

    const clickButton = () => {
        alert('Ini alert dari component button yang dikirim melalui props')
    }

    console.log(data);

    let viewProducts_HTMLTABLE = "";
    if (loading) {
        return <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        viewProducts_HTMLTABLE =
            data.map(item => {
                return (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>Rp. {item.price}</td>
                        <td>
                            <Link className="btn btn-primary" to={`/edit-product/${item.id}`} role="button">
                                Edit
                            </Link>
                        </td>
                        <td>
                            <button className="btn btn-danger" type='button' onClick={(e) => deleteProductById(e, item.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            })

    }

    return (
        <div className='container mt-5'>
            <h3>Product List</h3>
            <LinkButton 
                text='Add Product' 
                style={
                    {
                        width: 'max-content', 
                        height: 40, 
                        background: 'red',
                        borderRadius: 8,
                        border: 'none',
                        color: 'white',
                        padding: 15,
                        margin: 15,
                        textDecoration: 'none'
                    }
                }
                navigateTo={'/add-product'}
            />
            <Button
                text='+ Product' 
                style={
                    {
                        width: '100px', height: 40, background: 'red',
                        borderRadius: 8,
                        border: 'none',
                        color: 'white' 
                    }
                } 
                onClick={clickButton} 
            />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {viewProducts_HTMLTABLE}
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>T-shirt</td>
                        <td>Rp. 150000</td>
                        <td>
                            <Link class="btn btn-primary" to="#" role="button">
                                Edit
                            </Link>
                        </td>
                        <td>
                            <Link class="btn btn-danger" to="#" role="button">
                                Delete
                            </Link>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList