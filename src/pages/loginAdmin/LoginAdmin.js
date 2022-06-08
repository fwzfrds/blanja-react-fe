import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './loginAdmin.module.css'
import swal from 'sweetalert';
import Button from '../../components/base/button/button';
import { loginAdmin } from '../../config/redux/actions/adminAction'
import { useDispatch, useSelector } from 'react-redux'
import ValidMessage from '../../components/base/validation/ValidMessage';

const LoginAdmin = () => {

    const dispatch = useDispatch()
    const {isLoading, admin} = useSelector((state)=>state.admin)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [isInputValid, setIsInputValid] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        e.persist();

        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const {email: emailData} = loginData
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regEx.test(emailData)) {
            return setIsInputValid({...isInputValid, email: 'email is not valid'})
        } else {
            setIsInputValid({...isInputValid, email: ''})
        }

        swal({
            title: "Login",
            text: `Login Berhasil!`,
            icon: "success",
        });

        const localData = await localStorage.getItem('BlanjaUser')
        if (localData) {
            return swal({
                title: "Error",
                text: `Anda sudah masuk sebagai User`,
                icon: "error",
            });
        }

        dispatch(loginAdmin(loginData, navigate))

        // try {

        //     const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/admin/login`, data)
        //     console.log(result.data.data);
        //     const dataLocal = {
        //         name: result.data.data.name,
        //         id: result.data.data.id,
        //         email: result.data.data.email,
        //         role: result.data.data.role,
        //         token: result.data.data.token,
        //     }
        //     console.log(dataLocal)
        //     localStorage.setItem('BlanjaAdmin', JSON.stringify(dataLocal))
        //     swal({
        //         title: "Good job!",
        //         text: `${result.data.message}`,
        //         icon: "success"
        //     });

        //     navigate('/product-list')

        // } catch (error) {

        //     console.log(error.response.data.message);
        //     swal({
        //         title: "Good job!",
        //         text: `${error.response.data.message}`,
        //         icon: "error",
        //     });

        // }

    }

    return (
        <div className={`${styles.login} d-flex align-items-center justify-content-center`}>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className={`${styles.logo} d-flex justify-content-center`}>
                    <img src="./assets/img/logo/blanja-logo.png" alt="Blanja-logo" />
                    <h1 className={`brand-name mt-3 ${styles['brand-name']}`}>Blanja</h1>
                </div>
                <h4 className={`${styles.text1} text-center mt-4 fs-5`}>Please login with your account</h4>

                <div className={`${styles.role} row mt-4 align-items-center justify-content-center text-center`}>
                    <p className={`${styles.customer} col-6`}>Customer</p>
                    <p className={`${styles.seller} col-6`}>Seller</p>
                </div>

                <form id='my-form' onSubmit={handleSubmit} className={`input-container row mt-4 justify-content-center ${styles['input-container']}`}>
                    <input className="mt-3" type="email" name='email' placeholder="email" autoFocus onChange={handleInput} />
                    <ValidMessage 
                        text={isInputValid.email && `${isInputValid.email}`}
                        style={{ 
                            color: 'red'
                         }}
                    />
                    <input className="mt-3" name='password' type="password" placeholder="password" onChange={handleInput} />
                    <Link className={`${styles['forgot-password']} p-0 mt-4 text-decoration-none text-right`} to="#">Forgot password ?</Link>
                </form>

                {/* <button form='my-form' type="submit" className={`${styles.button1} btn rounded-pill text-white mt-4`}>PRIMARY</button> */}

                <Button
                    text={isLoading === false ? 'Login' : 'loading..'}
                    form='my-form'
                    type='submit'
                    className={`${styles.button1} btn rounded-pill text-white mt-4`}
                />

                <p className={`${styles.text2} mt-4`}>Don't have a Blanja account? <Link to='/register' className="text-decoration-none">Register</Link></p>

            </div>
        </div>
    )
}

export default LoginAdmin