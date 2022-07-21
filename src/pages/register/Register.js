import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './register.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {} from '../../config/redux/actions/userAction'


const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState('')

  const handleInput = (e) => {
    e.persist()

    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    dispatch(data, navigate)
  }

  const navToSeller = () => {
    navigate('/register-admin')
  }

  console.log(data)

  return (
    <div className={`${styles.register} container-fluid d-flex align-items-center justify-content-center px-0`}>
      <div className="container d-flex flex-column justify-content-center align-items-center m-0 py-5 px-0">
        <div className={`${styles.logo} d-flex justify-content-center`}>
          <img src="./assets/img/logo/blanja-logo.png" alt="Blanja-logo" />
          <h1 className={`brand-name mt-3 ${styles['brand-name']}`}>Blanja</h1>
        </div>
        <h4 className={`${styles.text1} text-center mt-4 fs-5`}>Please Sign Up with your account</h4>

        <div className={`${styles.role} row mt-4 align-items-center justify-content-center text-center`}>
          <p className={`${styles.customer} col-6`}>Customer</p>
          <p className={`${styles.seller} col-6`}
            onClick={navToSeller}
          >Seller</p>
        </div>

        <form onSubmit={handleRegister} id="my-form" class={`input-container row mt-4 justify-content-center ${styles['input-container']}`}>
          <input className="mt-3" type="text" name='firstName' placeholder="first name" autoFocus onChange={handleInput} />
          <input className="mt-3" type="text" name='lastName' placeholder="last name" onChange={handleInput} />
          <input className="mt-3" type="date" name='birth' placeholder="last name" onChange={handleInput} />
          <input className="mt-3" type="email" name='email' placeholder="email" onChange={handleInput} />
          <input className="mt-3" type="text" name='phone' placeholder="phone number" onChange={handleInput} />
          <input className="mt-3" type="password" name='password' placeholder="password" onChange={handleInput} />
        </form>

        <button form="my-form" type="submit" className={`${styles.button1} btn rounded-pill text-white mt-4`}>PRIMARY</button>

        <p className={`${styles.text2} mt-4`}>Already have a Blanja account? <Link to="/login" class="text-decoration-none">Login</Link></p>

      </div>
    </div>
  )
}

export default Register

// terakhir sampai sini lanjut abis magrib