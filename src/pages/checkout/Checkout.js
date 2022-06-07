import React from 'react'
import Navbar from '../../components/module/navbar/Navbar'
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div>
      <Navbar />

      <h1 className={`${styles['my-checkout']}`}>Checkout</h1>

      <h4 className={`${styles['section-title']}`}>Shipping Address</h4>

      <section className={`${styles['checkout-container']}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.address}`}>
            <h3 className={`${styles['address-title']}`}>Andreas Jane</h3>
            <p className={`${styles['address-text']}`}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas,
              Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <button className={`${styles['address-btn']}`}>choose another address</button>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.image}`}>
              <img src="./assets/img/suit.png" alt="Suit" />
              <div className={`${styles['image-text']}`}>
                <h3>Men's formal suit - Black</h3>
                <p>Zalora Cloth</p>
              </div>
            </div>
            <div className={`${styles.price}`}>
              <h3>$ 20.00</h3>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <div className={`${styles.image}`}>
              <img src="./assets/img/suit.png" alt="Suit" />
              <div className={`${styles['image-text']}`}>
                <h3>Men's formal suit - Black</h3>
                <p>Zalora Cloth</p>
              </div>
            </div>
            <div className={`${styles.price}`}>
              <h3>$ 20.00</h3>
            </div>
          </div>
          
        </div>
        <div className={`${styles.summary}`}>
          <h3 className={`${styles['summary-title']}`}>Shopping summary</h3>
          <div className={`${styles.order}`}>
            <h4>Order</h4>
            <h4>$ 40.0</h4>
          </div>
          <div className={`${styles.delivery}`}>
            <h4>Delivery</h4>
            <h4>$ 5.0</h4>
          </div>
          <hr className={`${styles['hr-summary']}`} />
          <div className={`${styles['shop-summary']}`}>
            <h4>Delivery</h4>
            <h4>$ 5.0</h4>
          </div>
          <button className={`${styles['payment-btn']}`}>select payment</button>
        </div>
      </section>
    </div>
  )
}

export default Checkout