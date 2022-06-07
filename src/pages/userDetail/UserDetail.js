import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/module/navbar/Navbar'
import styles from './UserDetail.module.css'
import Button from '../../components/base/button/button';
import Input from '../../components/base/input/input';

const UserProfile = () => {

    const dispatch = useDispatch()
    const { isLoading, user } = useSelector((state) => state.user)

    return (
        <div>
            <Navbar />
            <div className={`${styles['profile-container']}`}>
                <div className={`${styles['profile-nav']}`}>
                    <div className={`${styles.profile}`}>
                        <img src="/assets/img/icon/user-account.png" alt="" className={`${styles['profile-img']}`} />
                        <div className={`${styles['profile-text']}`}>
                            <h3 className={`${styles.name}`}>Johanes Mikael</h3>
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
                            <p className={`${styles['menu-text']} ${styles.active}`}>My Acoount</p>
                        </div>
                        <div className={`${styles['menu-item']}`}>
                            <div className={`${styles['menu-icon']} ${styles['ship-address']}`}>
                                <img src="/assets/img/icon/location.png" alt="" />
                            </div>
                            <p className={`${styles['menu-text']}`}>Shipping Address</p>
                        </div>
                        <div className={`${styles['menu-item']}`}>
                            <div className={`${styles['menu-icon']} ${styles['my-order']}`}>
                                <img src="/assets/img/icon/clipboard.png" alt="" />
                            </div>
                            <p className={`${styles['menu-text']}`}>My Order</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles['profile-data']}`}>
                    <div className={`${styles['data-container']}`}>
                        <div className={`${styles['data-title']}`}>
                            <h3>My Profile</h3>
                            <p>Manage your profile information</p>
                        </div>
                        <hr className={`${styles['data-hr']}`} />
                        <div className={`${styles['data-form-container']}`}>
                            <div className={`${styles['data-form']}`}>
                                <div className={`${styles['data-field']}`}>
                                    <label className={`${styles['field-name']}`} for="name">Name</label>
                                    <Input type="text" placeholder="name" id="name" value="Johanes Mikael" />
                                </div>
                                <div className={`${styles['data-field']}`}>
                                    <label className={`${styles['field-name']}`} for="email">Email</label>
                                    <Input type="email" placeholder="email" id="email" value="johanesmikael@gmail.com" />
                                </div>
                                <div className={`${styles['data-field']}`}>
                                    <label className={`${styles['field-name']}`} for="phone">Phone Number</label>
                                    <Input type="text" placeholder="phone" id="phone" value="08901289012" />
                                </div>
                                <div className={`${styles['data-gender']}`}>
                                    <label className={`${styles['field-name-gender']}`}>Gender</label>
                                    <div className={`${styles['radio-button']}`}>
                                        <div className={`${styles['radio-item']}`}>
                                            <input type="radio" id="male" name="gender" />
                                            <label for="male">Lak-laki</label>
                                        </div>
                                        <div className={`${styles['radio-item']}`}>
                                            <input type="radio" id="female" name="gender" />
                                            <label for="female">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles['birth-date']}`}>
                                    <label className={`${styles['birth-field-name']}`}>Date of Birth</label>
                                    <Input type="date" name="date" id="date" />
                                </div>
                                {/* <button className={`${styles['data-btn']}`}>Save</button> */}
                                <Button
                                    text='Save'
                                    className={`${styles['data-btn']}`}
                                />
                            </div>
                            <div className={`${styles['data-img']}`}>
                                <img src="/assets/img/icon/user-account-lg.png" alt="" />
                                <Button
                                    text='Select Image'
                                    className={`${styles['img-button']}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile