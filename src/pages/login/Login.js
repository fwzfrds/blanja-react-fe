import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './login.module.css'

const Login = () => {
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

                <div className={`input-container row mt-4 justify-content-center ${styles['input-container']}`}>
                    <input className="mt-3" type="email" placeholder="email" autoFocus/>
                    <input className="mt-3" type="password" placeholder="password" />
                    <Link className={`${styles['forgot-password']} p-0 mt-4 text-decoration-none text-right`} to="#">Forgot password ?</Link>
                </div>

                <button type="button" className={`${styles.button1} btn rounded-pill text-white mt-4`}>PRIMARY</button>

                <p className={`${styles.text2} mt-4`}>Don't have a Blanja account? <Link to='/register' className="text-decoration-none">Register</Link></p>

            </div>
        </div>
    )
}

export default Login