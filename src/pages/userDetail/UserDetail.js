import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../config/redux/actions/userAction'
import Navbar from '../../components/module/navbar/Navbar'
import styles from './UserDetail.module.css'
import Button from '../../components/base/button/button'
import Input from '../../components/base/input/input'

const UserProfile = () => {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const [userPhoto, setUserPhoto] = useState(user?.photo)
    const [updateData, setUpdateData] = useState('')
    const [saveImg, setSaveImg] = useState('')
    const [gender, setGender] = useState(user.id_gender)
    const [authToken, setAuthToken] = useState('')

    const date = new Date(user.birth)
    const birthDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`

    useEffect(() => {
        const dataFromLocal = JSON.parse(localStorage.getItem('BlanjaUser'))
        setAuthToken(dataFromLocal.token)
    }, []);

    const handlePhoto = (e) => {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0]
        console.log(URL.createObjectURL(uploaded));
        setUserPhoto(URL.createObjectURL(uploaded))
        setSaveImg(uploaded)
    }

    const cancelPhotoChange = () => {
        setUserPhoto(user.photo)
        setSaveImg('')
    }

    const handleInput = (e) => {
        e.persist()

        let target = [e.target.name]

        if (target[0] === 'gender') {
            let value = parseInt(e.target.value)
            setUpdateData({ ...updateData, [e.target.name]: value })
        } else {
            setUpdateData({ ...updateData, [e.target.name]: e.target.value })
        }
    }

    const handleRadio = (e) => {
        e.persist()

        const value = parseInt(e.target.value)
        setGender(value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        let formData = new FormData()

        if (saveImg) {
            formData.append('photo', saveImg)
        }

        if (Object.keys(updateData).length > 0) {
            const data = updateData
            Object.keys(updateData).forEach((item) => {
                formData.append(item, data[item])
            })
        }

        console.log(formData.get('firstName'))
        console.log(formData.get('lastName'))
        console.log(formData.get('email'))
        console.log(formData.get('gender'))
        console.log(formData.get('birth'))
        dispatch(update(formData, authToken))
    }

    console.log(updateData)
    console.log(gender)
    // console.log(Object.keys(updateData))
    // console.log(Object.keys(updateData).length)
    // console.log(saveImg)

    return (
        <div>
            <Navbar />
            <div className={`${styles['profile-container']}`}>
                <div className={`${styles['profile-nav']}`}>
                    <div className={`${styles.profile}`}>
                        <div className={`${styles.photo_profile}`}>
                            <img src={userPhoto ? userPhoto : `/assets/img/icon/user-account.png`} alt="" className={`${styles['profile-img']}`} />
                        </div>
                        <div className={`${styles['profile-text']}`}>
                            <h3 className={`${styles.name}`}>{`${user.first_name} ${user.last_name}`}</h3>
                            <div className={`${styles['profile-action']}`}>
                                <img src={`/assets/img/icon/edit.png`} alt="" className={`${styles['edit-icon']}`} />
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
                            <form className={`${styles['data-form']}`}
                                onSubmit={handleUpdate}
                            >
                                <div className={`${styles['data-field']}`}>
                                    <label className={`${styles['field-name']}`} htmlFor="firstName">First Name</label>
                                    <Input type="text" name='firstName' defaultValue={`${user.first_name}`} id="firstName" onChange={handleInput} />
                                </div>
                                <div className={`${styles['data-field']}`}>
                                    <label className={`${styles['field-name']}`} htmlFor="lastName">Last Name</label>
                                    <Input type="text" name='lastName' defaultValue={`${user.last_name}`} id="lastName" onChange={handleInput} />
                                </div>
                                <div className={`${styles['data-field']}`}>
                                    <label className={`${styles['field-name']}`} htmlFor="email">Email</label>
                                    <Input type="email" name='email' defaultValue={user.email} id="email" onChange={handleInput} />
                                </div>
                                <div className={`${styles['data-field']}`}>
                                    <label className={`${styles['field-name']}`} htmlFor="phone">Phone Number</label>
                                    <Input type="text" name='phone' defaultValue={user.phone} id="phone" onChange={handleInput} />
                                </div>
                                <div className={`${styles['data-gender']}`}>
                                    <label className={`${styles['field-name-gender']}`}>Gender</label>
                                    <div className={`${styles['radio-button']}`}>
                                        <div className={`${styles['radio-item']}`}>
                                            <input type="radio" value={1} checked={gender === 1 ? true : false} id="gender" name="gender" onClick={handleRadio} onChange={handleInput} />
                                            <label htmlFor="gender">Lak-laki</label>
                                        </div>
                                        <div className={`${styles['radio-item']}`}>
                                            <input type="radio" value={2} checked={gender === 2 ? true : false} id="gender" name="gender" onClick={handleRadio} onChange={handleInput} />
                                            <label htmlFor="gender">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles['birth-date']}`}>
                                    <label className={`${styles['birth-field-name']}`}>Date of Birth</label>
                                    <Input type="date" defaultValue={birthDate} name="birth" id="date" onChange={handleInput} />
                                    {/* <p>{user.birth}</p> */}
                                </div>
                                <Button
                                    text='Save'
                                    type='submit'
                                    className={`${styles['data-btn']}`}
                                />
                            </form>
                            <div className={`${styles['data-img']}`}>
                                <div className={`${styles.img_container}`}>
                                    <img src={userPhoto ? userPhoto : `/assets/img/icon/user-account-lg.png`} alt="" />
                                </div>
                                {/* Sampai sini terakhir edit photo profile */}
                                {/* <Button
                                    text='Select Image'
                                    className={`${styles['img-button']}`}
                                /> */}
                                <input type="file" accept="image/,.jpg,.png,.pdf" id='photo' style={{ display: 'none' }} onChange={handlePhoto} />
                                {saveImg &&
                                    <p
                                        style={{
                                            margin: 0,
                                            cursor: 'pointer'
                                        }}
                                        onClick={cancelPhotoChange}
                                    >cancel change</p>
                                }
                                <label htmlFor="photo"
                                    className={`${styles['img-button']}`}
                                >Select Image</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile