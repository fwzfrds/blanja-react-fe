import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './MyProducts.module.css'
import swal from 'sweetalert';
import Navbar from '../../../components/module/navbar/Navbar'
import ProductList from './ProductList';

const MyProducts = () => {

    const handleInput = () => {
        console.log('handleinput')
    }

    const handleUploadChange = () => {
        console.log('ini handleUplaodChange');
    }

    const handleSubmit = () => {
        console.log('handlesubmit')
    }

    return (
        <div className={`${styles['myprod-container']}`}>
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
                                <p className={`${styles['submenu-title']} ${styles['submenu-title-1']}`}>My Products</p>
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
                    <div className={`${styles.list_product}`}>
                        <ProductList />
                    </div>
                    <div className={`${styles['btn-container']}`}>
                        <button className={`${styles['sell-btn']}`} onClick={handleSubmit}>Simpan</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyProducts