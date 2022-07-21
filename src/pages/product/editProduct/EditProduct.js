import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './editProduct.module.css'
import swal from 'sweetalert';
import Navbar from '../../../components/module/navbar/Navbar'
import { updateProduct } from '../../../config/redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const EditProduct = (props) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { isLoading, products } = useSelector((state) => state.products)
    const [categories, setCategories] = useState('')
    const [localData, setLocalData] = useState([])

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
        setLocalData(dataFromLocal.token)
        fetchCategories()
    }, []);

    const [data, setData] = useState({
        name: '',
        description: '',
        qty: 0,
        price: 0,
        idCategory: 0,
    })

    const [updateData, setUpdateData] = useState('')

    const [image, setImage] = useState([])

    const [saveImg, setSaveImg] = useState('')

    useEffect(() => {
        const fethData = async () => {
            // dispatch(updateProduct(id))

            try {
                const product_id = id
                const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/products/detail/${product_id}`)
                const data = result.data.data
                setData(data)
                setImage(data.image)
            } catch (error) {
                console.log(error)
            }
        }
        fethData()
    }, [])

    // console.table(updateData)

    const handleUploadChange = (e) => {
        // console.log(e.target.files[0]);
        // let uploaded = e.target.files[0]
        // console.log(URL.createObjectURL(uploaded));
        // setImage(URL.createObjectURL(uploaded))
        // setSaveImg(uploaded)
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

        let formData = new FormData()
        if (!saveImg) {
            formData.append('photo', undefined)
        } else {
            if (Object.keys(saveImg).length > 1) {
                const images = saveImg
                Object.keys(images).forEach((image) => {
                    formData.append(`photo`, images[image])
                })
            } else {
                if(saveImg) {
                    formData.append('photo', saveImg)
                }
            }
        }

        if(updateData.name){
            formData.append('name', updateData.name)
        }
        if(updateData.description) {
            formData.append('description', updateData.description)
        }
        if(updateData.qty) {
            formData.append('qty', updateData.qty)
        }
        if(updateData.price) {
            formData.append('price', updateData.price)
        }
        if(updateData.idCategory) {
            formData.append('idCategory', updateData.idCategory)
        }
        if(updateData.condition) {
            formData.append('condition', updateData.condition)
        }

        try {
            dispatch(updateProduct(formData, localData, id))
        } catch (error) {
            console.log(error)
            swal({
                title: "Update Error!",
                text: `${error.response.data.message}`,
                icon: "error",
            });
        }
    }

    const handleInput = (e) => {
        e.persist()

        let target = [e.target.name]

        // console.log(target[0]);

        if (target[0] === 'qty' || target[0] === 'price' || target[0] === 'idCategory') {
            let value = parseInt(e.target.value)
            setUpdateData({ ...updateData, [e.target.name]: value })
            console.log(value);
        } else {
            setUpdateData({ ...updateData, [e.target.name]: e.target.value })
        }

    }

    const delCurrentImage = () => {
        setImage([])
    }

    // console.log(data)
    console.log(updateData)
    console.log(saveImg)
    // console.log(products)

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
                            <input type="text" id="invent" name='name' onChange={handleInput} placeholder={data?.name} />
                        </div>
                    </div>
                    <div className={`${styles['item-details']}`}>
                        <h3 className={`${styles['details-title']}`}>Item Details</h3>
                        <hr className={`${styles['hr-invent']}`} />
                        <div className={`${styles['unit-price']}`}>
                            <label htmlFor="price">Unit Price</label>
                            <input type="number" id="price" name='price' onChange={handleInput} placeholder={data.price} />
                        </div>
                        <div className={`${styles['unit-category']}`}>
                            <label htmlFor="category">Category: {data?.name_category}</label>
                            {/* <input type="number" id="category" name='idCategory' onChange={handleInput} value={data['id_category']} /> */}
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
                            <input type="number" id="stock" name='qty' onChange={handleInput} placeholder={data.qty} />
                        </div>
                        <div className={`${styles['unit-qty-radio']}`}>
                            <label>Stock</label>
                            <div className={`${styles['radio-buttons']}`}>
                                <div className={`${styles['new-radio']}`}>
                                    <input type="radio" checked={data?.condition === 'baru'} value='baru' id="condition" name="condition" onChange={handleInput} />
                                    <label htmlFor="new">Baru</label>
                                </div>
                                <div className={`${styles['new-radio']}`}>
                                    <input type="radio" checked={data?.condition === 'bekas'} value='bekas' id="condition" name="condition" onChange={handleInput} />
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
                                        <img src={image.length > 0 ? image[0] : 'https://fakeimg.pl/350x200/?text=Image'} alt="" />
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
                            <input type="file" multiple className='img_input' accept='image/*' onClick={delCurrentImage} onChange={handleUploadChange} />
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