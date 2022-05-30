import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './register.module.css'

const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    adminPassword: '',
    phone: ''
  })

  return (
    <div class={`${styles.register} container-fluid d-flex align-items-center justify-content-center px-0`}>
      <div class="container d-flex flex-column justify-content-center align-items-center m-0 py-5 px-0">
        <div class={`${styles.logo} d-flex justify-content-center`}>
          <img src="./assets/img/logo/blanja-logo.png" alt="Blanja-logo" />
          <h1 class={`brand-name mt-3 ${styles['brand-name']}`}>Blanja</h1>
        </div>
        <h4 class={`${styles.text1} text-center mt-4 fs-5`}>Please Sign Up with your account</h4>

        <div class={`${styles.role} row mt-4 align-items-center justify-content-center text-center`}>
          <p className={`${styles.customer} col-6`}>Customer</p>
          <p className={`${styles.seller} col-6`}>Seller</p>
        </div>

        <form id="my-form" class={`input-container row mt-4 justify-content-center ${styles['input-container']}`}>
          <input class="mt-3" type="name" placeholder="name" autoFocus/>
          <input class="mt-3" type="email" placeholder="email" />
          <input class="mt-3" type="text" placeholder="phone number" />
          <input class="mt-3" type="password" placeholder="password" />
        </form>

        <button form="my-form" type="submit" class={`${styles.button1} btn rounded-pill text-white mt-4`}>PRIMARY</button>

        <p class={`${styles.text2} mt-4`}>Already have a Blanja account? <Link to="/login" class="text-decoration-none">Login</Link></p>

      </div>
    </div>
  )
}

export default Register

// terakhir sampai sini lanjut abis magrib