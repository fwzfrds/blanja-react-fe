import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';

import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {

  const [show, setShow] = useState(false)

  const handleBurgerClick = () => {
    if (show === false) {
      return setShow(true)
    }
    setShow(false)
  }

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${styles.navbar}`}>
        <div className={`container nav_container d-flex justify-content-start ${styles.container} ${styles.nav_container}`}>
          <Link className={`navbar-brand d-flex align-items-center gap-2 fs-4 m-0 ${styles['navbar-brand']}`} to="index.html">
            <img src="/assets/img/logo/blanja-logo.png" alt="" width="32" className="d-inline-block align-text-top"/>
            <p className="mt-3">Blanja</p>
          </Link>
          <form className={`search_form d-flex ms-5 ${styles.search_form}`} role="search">
            <input className={`form-control me-2 rounded-pill search border border-2 ${styles.search}`} type="search" placeholder="Search" aria-label="Search"/>
            <div className={`dropdown rounded border border-2 d-flex justify-content-center align-items-center ${styles.dropdown}`}>
                <Link className={`btn dropdown-toggle p-0 border-0 ${styles.btn}`} to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="/assets/img/icon/filter.png" alt=""/>
                </Link>
              
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><Link className={`dropdown-item ${styles['dropdown-item']}`} to="#">Price</Link></li>
                  <li><Link className={`dropdown-item ${styles['dropdown-item']}`} to="#">Category</Link></li>
                  <li><Link className={`dropdown-item ${styles['dropdown-item']}`} to="#">Terbaru</Link></li>
                  <li><Link className={`dropdown-item ${styles['dropdown-item']}`} to="#">Baru</Link></li>
                  <li><Link className={`dropdown-item ${styles['dropdown-item']}`} to="#">Bekas</Link></li>
                </ul>
              </div>
          </form>
          <button className={`navbar-toggler border-2 p-0 ${styles['navbar-toggler']}`} onClick={handleBurgerClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse nav_collapse ${styles['navbar-collapse']}`} id="navbarNav" style={{ display: show ? "flex" : "none" }}>
            <ul className={`navbar-nav d-flex align-items-center gap-4 ${styles['navbar-nav']}`}>
              <li className="nav-item">
                <Link className={`nav-link rounded ${styles['nav-link']}`} to="#"><img src="/assets/img/icon/cart.png" alt=""/></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link rounded ${styles['nav-link']}`} to="#"><img src="/assets/img/icon/bell.png" alt=""/></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link rounded ${styles['nav-link']}`} to="#"><img src="/assets/img/icon/mail.png" alt=""/></Link>
              </li>
              <li className="nav-item">
                <div className="dropdown d-flex justify-content-center align-items-center">
                  <Link className={`account-dropdown text-decoration-none dropdown-toggle p-2 rounded-circle ${styles['account-dropdown']}`} to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/assets/img/icon/account-icon.png" alt=""/>
                  </Link>
                
                  <ul className={`user-dropdown dropdown-menu ${styles['user-dropdown']} ${styles['dropdown-menu']} ${styles['show']}`} aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to="#">My Account</Link></li>
                    <li><Link className="dropdown-item" to="#">Shopping Address</Link></li>
                    <li><Link className="dropdown-item" to="#">My Order</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar