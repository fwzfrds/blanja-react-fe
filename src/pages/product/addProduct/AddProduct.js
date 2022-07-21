import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './addProduct.module.css'
import swal from 'sweetalert';
import Navbar from '../../../components/module/navbar/Navbar'
import Button from '../../../components/base/button/button';
import Input from '../../../components/base/input/input';
import { addProduct } from '../../../config/redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const AddProduct = () => {

    const navigate = useNavigate()
    const [authToken, setAuthToken] = useState([]);
    const dispatch = useDispatch()
    const [categories, setCategories] = useState('')

    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/categories/`)
            setCategories(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const dataFromLocal = JSON.parse(localStorage.getItem('BlanjaAdmin'))
        setAuthToken(dataFromLocal.token)
        fetchCategories()
    }, []);

    const [data, setData] = useState({
        name: '',
        description: ''
    })

    const [image, setImage] = useState([])

    const [saveImg, setSaveImg] = useState('')

    const handleUploadChange = (e) => {
        if (Object.keys(e.target.files).length > 1) {
            const files = e.target.files
            Object.keys(files).forEach(file => {
                setImage((current) => [...current, URL.createObjectURL(files[file])])
            })
            setSaveImg(e.target.files)
        } else {
            setImage([URL.createObjectURL(e.target.files[0])])
            setSaveImg(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!saveImg) {
            swal({
                title: "Good job!",
                text: 'Upload Gambar Dulu',
                icon: "error",
            });
        } else {
            let formData = new FormData()
            if (Object.keys(saveImg).length > 1) {
                const images = saveImg
                Object.keys(images).forEach((image) => {
                    formData.append(`photo`, images[image])
                })
            } else {
                formData.append('photo', saveImg)
            }

            formData.append('name', data.name)
            formData.append('description', data.description)
            formData.append('qty', data.qty)
            formData.append('price', data.price)
            formData.append('idCategory', data.idCategory)
            formData.append('condition', data.condition)

            try {
                dispatch(addProduct(formData, authToken, navigate))
            } catch (error) {
                console.log(error.response.data.message);
                swal({
                    title: "Add Product Error!",
                    text: `${error.response.data.message}`,
                    icon: "error",
                });
            }
        }
    }

    const handleInput = (e) => {
        e.persist()

        let target = [e.target.name]


        if (target[0] === 'qty' || target[0] === 'price' || target[0] === 'idCategory') {
            let value = parseInt(e.target.value)
            setData({ ...data, [e.target.name]: value })
        } else {
            setData({ ...data, [e.target.name]: e.target.value })
        }
    }

    console.log(data)
    console.log(categories)
    // console.log(image)
    // console.log(saveImg)

    return (
        <div>
            <Navbar />
            <div className={`${styles['profile-container']}`}>
                <div className={`${styles['profile-nav']}`}>
                    <div className={`${styles.profile}`}>
                        <img src="./assets/img/icon/user-account.png" alt="" className={`${styles['profile-img']}`} />
                        <div className={`${styles[`profile-text`]}`}>
                            <h3 className="name">Johanes Mikael</h3>
                            <div className={`${styles['profile-action']}`}>
                                <img src="./assets/img/icon/edit.png" alt="" className={`${styles['edit-icon']}`} />
                                <p>Edit Profile</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['profile-menu']}`}>
                        <div className={`${styles['menu-item']}`}>
                            <div className={`${styles['menu-icon']} ${styles['my-account']}`}>
                                <img src="./assets/img/icon/user-icon.png" alt="" />
                            </div>
                            <p className={`${styles['menu-text']}`}>Store</p>
                            <img src="./assets/img/icon/bottom-arrow.png" className={`${styles.bottom}`} alt='' />
                        </div>
                        <div className={`${styles['menu-item']} ${styles['active-menu']}`}>
                            <div className={`${styles.item}`}>
                                <div className={`${styles['menu-icon']} ${styles['ship-address']}`}>
                                    <img src="./assets/img/icon/location.png" alt="loc" />
                                </div>
                                <p className={`${styles['menu-text']} ${styles['active-text']}`}>Product</p>
                                <img src="./assets/img/icon/up-arrow.png" className={`${styles.bottom}`} alt='' />
                            </div>
                            <div className={`${styles[`sub-menu`]}`}>
                                <p className={`${styles['submenu-title']}`}>My Products</p>
                                <div className={`${styles['submenu-item']}`}>
                                    <p>Selling Product</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['menu-item']}`}>
                            <div className={`${styles['menu-icon']} ${styles['my-order']}`}>
                                <img src="./assets/img/icon/clipboard.png" alt="" />
                            </div>
                            <p className={`${styles['menu-text']}`}>Order</p>
                            <img src="./assets/img/icon/bottom-arrow.png" className={`${styles.bottom}`} alt='' />
                        </div>
                    </div>
                </div>
                <div className={`${styles['product-data']}`}>
                    <div className={`${styles.inventory}`}>
                        <h3 className={`${styles['invent-title']}`}>Inventory</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['invent-form']}`}>
                            <label htmlFor="invent">Name of Goods</label>
                            <Input type="text" id="invent" name='name' onChange={handleInput} />
                        </div>
                    </div>
                    <div className={`${styles['item-details']}`}>
                        <h3 className={`${styles['details-title']}`}>Item Details</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['unit-price']}`}>
                            <label htmlFor="price">Unit Price</label>
                            <Input type="number" id="price" name='price' onChange={handleInput} />
                        </div>
                        <div className={`${styles['unit-category']}`}>
                            <label htmlFor="category">Category</label>
                            {/* <Input type="number" id="category" name='idCategory' onChange={handleInput} /> */}
                            <select name="idCategory" id="category" onChange={handleInput}>
                                <option value={0}>Select Category</option>
                                {categories && categories.map(({ id, name }, idx) => {
                                    return (
                                        <option key={idx} value={id}>{name}</option>
                                    )
                                })}
                                {/* <option value="2">Suit</option> */}
                            </select>
                        </div>
                        <div className={`${styles['unit-qty']}`}>
                            <label htmlFor="stock">Stock</label>
                            <Input type="number" id="stock" name='qty' onChange={handleInput} />
                        </div>
                        <div className={`${styles['unit-qty-radio']}`}>
                            <label>Stock</label>
                            <div className={`${styles['radio-buttons']}`}>
                                <div className={`${styles['new-radio']}`}>
                                    <input type="radio" value='baru' id="condition" name="condition" onChange={handleInput} />
                                    <label htmlFor="new">Baru</label>
                                </div>
                                <div className={`${styles['new-radio']}`}>
                                    <input type="radio" value='bekas' id="condition" name="condition" onChange={handleInput} />
                                    <label htmlFor="new">Bekas</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['product-photos']}`}>
                        <h3 className={`${styles['photos-title']}`}>Photos of goods</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['photos-container']}`}>
                            <div className={`${styles['photos-area']}`}>
                                <div className={`${styles['main-photo']}`}>
                                    <div className={`${styles['photo-container']}`}>
                                        <img src={image.length > 0 ? image[0] : 'https://fakeimg.pl/350x200/?text=Image'} alt="main" />
                                    </div>
                                    <p>Foto Utama</p>
                                </div>
                                <div className={`${styles.photos}`}>
                                    <div className={`${styles.photo}`}>
                                        <img src={image[1] ? image[1] : 'https://fakeimg.pl/350x200/?text=Image'} alt="" />
                                    </div>
                                    <div className={`${styles.photo}`}>
                                        <img src={image[2] ? image[2] : 'https://fakeimg.pl/350x200/?text=Image'} alt="" />
                                    </div>
                                    <div className={`${styles.photo}`}>
                                        <img src={image[3] ? image[3] : 'https://fakeimg.pl/350x200/?text=Image'} alt="" />
                                    </div>
                                    <div className={`${styles.photo}`}>
                                        <img src={image[4] ? image[4] : 'https://fakeimg.pl/350x200/?text=Image'} alt="" />
                                    </div>

                                </div>
                            </div>
                            <input type="file" multiple className='img_input' accept='image/*' onChange={handleUploadChange} />
                            <hr className={`${styles['hr-photo']}`} />
                            <button className={`${styles['photo-btn']}`}>Upload foto</button>
                        </div>
                    </div>
                    <div className={`${styles['product-desc']}`}>
                        <h3 className={`${styles['desc-title']}`}>Description</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['text-editor']}`}>
                            <div className={`${styles.editor}`}>
                                <textarea name="description" id="desc" placeholder='Write your product description here' onChange={handleInput}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['btn-container']}`}>
                        {/* <button className={`${styles['sell-btn']}`} onClick={handleSubmit} >Jual</button> */}
                        <Button
                            className={`${styles['sell-btn']}`}
                            text='Sell'
                            onClick={handleSubmit}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProduct

// Create Products Berhasil