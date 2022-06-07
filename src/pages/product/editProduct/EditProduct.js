import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './editProduct.module.css'
import swal from 'sweetalert';
import Navbar from '../../../components/module/navbar/Navbar'
import {updateProduct} from '../../../config/redux/actions/productAction'
import {useDispatch, useSelector} from 'react-redux'

const EditProduct = (props) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()

    const {isLoading, products} = useSelector((state)=>state.products)


    const [localData, setLocalData] = useState([])

    useEffect(() => {
        const dataFromLocal = JSON.parse(localStorage.getItem('BlanjaAdmin'))
        console.log(dataFromLocal.token)
        setLocalData(dataFromLocal.token)
    }, []);

    const [data, setData] = useState({
        name: '',
        description: '',
        qty: 0,
        price: 0,
        idCategory: 0,
    })

    const [image, setImage] = useState('http://fakeimg.pl/190x190')

    const [saveImg, setSaveImg] = useState(null)

    useEffect(() => {
        const fethData = async () => {
            // dispatch(updateProduct(id))

            try {
                const product_id = id;
                console.log(product_id)
                const result = await axios.get(`http://localhost:5000/v1/products/detail/${product_id}`)
                console.log('Get Products Success!');
                // console.log(result.data);
                setData(result.data.data)
            } catch (error) {
                console.log(error);
                console.log('Fetching Data Error!');
            }
        }
        fethData()
    }, [])

    console.log(data);

    const handleUploadChange = (e) => {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0]
        console.log(URL.createObjectURL(uploaded));
        setImage(URL.createObjectURL(uploaded))
        setSaveImg(uploaded)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData()
        if(saveImg === null) {
            formData.append('photo', undefined)
        } else {
            formData.append('photo', saveImg)
        }

        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('qty', data.qty)
        formData.append('price', data.price)
        formData.append('idCategory', data.id_category)

        console.log(formData.get('name'))
        console.log(formData.get('description'))
        console.log(formData.get('qty'))
        console.log(formData.get('price'))
        console.log(formData.get('idCategory'))
        console.log(formData.get('photo'))

        try {
            dispatch(updateProduct(formData, localData, id))
            // const result = await axios.put(`http://localhost:5000/v1/products/edit/${id}`, formData, {
            //     headers: { Authorization: `Bearer ${localData.token}` }
            // })
            // console.log(result);
            // swal({
            //     title: "Good job!",
            //     text: `${result.data.message}`,
            //     icon: "success"
            // });
            // navigate('/product-list')
        } catch (error) {
            console.log(error.response.data.message);
            swal({
                title: "Update Error!",
                text: `${error.response.data.message}`,
                icon: "error",
            });
        }
    }

    const handleInput = (e) => {
        e.persist();

        let target = [e.target.name]

        console.log(target[0]);

        if (target[0] === 'qty' || target[0] === 'price' || target[0] === 'idCategory') {
            let value = parseInt(e.target.value)
            setData({ ...data, [e.target.name]: value });
            console.log(value);
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }

    }

    console.log(data);
    console.log(products)

    // Edit Berhasil Lanjut Delete

    return (
        <div>
            <Navbar />
            <div className={`${styles['profile-container']}`}>
                <div className={`${styles['profile-nav']}`}>
                    <div className={`${styles.profile}`}>
                        <img src="/assets/img/icon/user-account.png" alt="" className={`${styles['profile-img']}`} />
                        <div className={`${styles[`profile-text`]}`}>
                            <h3 className="name">Johanes Mikael</h3>
                            <div className={`${styles['profile-action']}`}>
                                <img src="/assets/img/icon/edit.png" alt="" className={`${styles['edit-icon']}`} />
                                <p>Edit Profile</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['profile-menu']}`}>
                        <div className={`${styles['menu-item']}`}>
                            <div className={`${styles['menu-icon']} ${styles['my-account']}`}>
                                <img src="/assets/img/icon/user-icon.png" alt="" />
                            </div>
                            <p className={`${styles['menu-text']}`}>Store</p>
                            <img src="/assets/img/icon/bottom-arrow.png" className={`${styles.bottom}`} alt='' />
                        </div>
                        <div className={`${styles['menu-item']} ${styles['active-menu']}`}>
                            <div className={`${styles.item}`}>
                                <div className={`${styles['menu-icon']} ${styles['ship-address']}`}>
                                    <img src="/assets/img/icon/location.png" alt="loc" />
                                </div>
                                <p className={`${styles['menu-text']} ${styles['active-text']}`}>Product</p>
                                <img src="/assets/img/icon/up-arrow.png" className={`${styles.bottom}`} alt='' />
                            </div>
                            <div className={`${styles[`sub-menu`]}`}>
                                <p className={`${styles['submenu-title']}`}>My Products</p>
                                <p className={`${styles['submenu-title']}`}>Selling Product</p>
                                {/* <div className={`${styles['submenu-item']}`}>
                                    <p>Selling Product</p>
                                </div> */}
                            </div>
                        </div>
                        <div className={`${styles['menu-item']}`}>
                            <div className={`${styles['menu-icon']} ${styles['my-order']}`}>
                                <img src="/assets/img/icon/clipboard.png" alt="" />
                            </div>
                            <p className={`${styles['menu-text']}`}>Order</p>
                            <img src="/assets/img/icon/bottom-arrow.png" className={`${styles.bottom}`} alt='' />
                        </div>
                    </div>
                </div>
                <div className={`${styles['product-data']}`}>
                    <div className={`${styles.inventory}`}>
                        <h3 className={`${styles['invent-title']}`}>Inventory</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['invent-form']}`}>
                            <label htmlFor="invent">Name of Goods</label>
                            <input type="text" id="invent" name='name' onChange={handleInput} value={data.name} />
                        </div>
                    </div>
                    <div className={`${styles['item-details']}`}>
                        <h3 className={`${styles['details-title']}`}>Item Details</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['unit-price']}`}>
                            <label htmlFor="price">Unit Price</label>
                            <input type="number" id="price" name='price' onChange={handleInput} value={data.price} />
                        </div>
                        <div className={`${styles['unit-category']}`}>
                            <label htmlFor="category">Category</label>
                            <input type="number" id="category" name='idCategory' onChange={handleInput} value={data['id_category']} />
                        </div>
                        <div className={`${styles['unit-qty']}`}>
                            <label htmlFor="stock">Stock</label>
                            <input type="number" id="stock" name='qty' onChange={handleInput} value={data.qty} />
                        </div>
                        <div className={`${styles['unit-qty-radio']}`}>
                            <label>Stock</label>
                            <div className={`${styles['radio-buttons']}`}>
                                <div className={`${styles['new-radio']}`}>
                                    <input type="radio" id="new" name="radio" />
                                    <label htmlFor="new">Baru</label>
                                </div>
                                <div className={`${styles['new-radio']}`}>
                                    <input type="radio" id="new" name="radio" />
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
                                        <img src={image} alt="" />
                                    </div>
                                    <p>Foto Utama</p>
                                </div>
                                <div className={`${styles.photos}`}>
                                    <div className={`${styles.photo}`}>
                                        <img src="/assets/img/icon/box-md.png" alt="" />
                                    </div>
                                    <div className={`${styles.photo}`}>
                                        <img src="/assets/img/icon/box-md.png" alt="" />
                                    </div>
                                    <div className={`${styles.photo}`}>
                                        <img src="/assets/img/icon/box-md.png" alt="" />
                                    </div>
                                    <div className={`${styles.photo}`}>
                                        <img src="/assets/img/icon/box-md.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <input type="file" className='img_input' accept='image/*' onChange={handleUploadChange} />
                            <hr className={`${styles['hr-photo']}`} />
                            <button className={`${styles['photo-btn']}`}>Upload foto</button>
                        </div>
                    </div>
                    <div className={`${styles['product-desc']}`}>
                        <h3 className={`${styles['desc-title']}`}>Description</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['text-editor']}`}>
                            <div className={`${styles.editor}`}>
                                <textarea name="description" id="desc" placeholder='Write your product description here' onChange={handleInput} value={data.description}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['btn-container']}`}>
                        <button className={`${styles['sell-btn']}`} onClick={handleSubmit}>Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct

// Create Products Berhasil