import React, { useState, useEffect } from 'react'
import Navbar from '../../components/module/navbar/Navbar'
import styles from './Checkout.module.css'
import axios from 'axios'
import swal from 'sweetalert'

const Checkout = () => {

  const [authToken, setauthToken] = useState('')
  const [userData, setUserData] = useState('')
  const [delivery, setDelivery] = useState(25000)
  const [checkoutData, setCheckoutData] = useState('')

  useEffect(() => {
    let local
    let localData
    if (localStorage.getItem('BlanjaUser')) {
      local = localStorage.getItem('BlanjaUser')
      localData = JSON.parse(local)
      setauthToken(localData.token)
      setUserData(localData)
    }
  }, [])


  useEffect(() => {
    const fetchCheckout = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/transactions`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })

      // console.log(res.data.data)
      setCheckoutData(res.data.data)
    }

    if (authToken) {
      fetchCheckout()
    }
  }, [authToken])

  console.log(authToken)
  console.log(userData)
  console.log(checkoutData)

  return (
    <div>
      <Navbar />

      <h1 className={`${styles['my-checkout']}`}>Checkout</h1>

      <h4 className={`${styles['section-title']}`}>Shipping Address</h4>

      <section className={`${styles['checkout-container']}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.address}`}>
            <h3 className={`${styles['address-title']}`}>{checkoutData[0]?.name}</h3>
            <p className={`${styles['address-text']}`}>{checkoutData[0]?.address}</p>
            <button className={`${styles['address-btn']}`}>choose another address</button>
          </div>
          {!checkoutData ? <p>loading...</p>
            :
            checkoutData.map((item, idx) => {
              return (
                <div className={`${styles.item}`}>
                  <div className={`${styles.image}`}>
                    <img src={item.image ? item.image[0] : 'https://fakeimg.pl/400x400/?text=product'} alt="Suit" />
                    <div className={`${styles['image-text']}`}>
                      <h3>{item.product_name}</h3>
                      <p>Zalora</p>
                    </div>
                  </div>
                  <div className={`${styles.price}`}>
                    <h3>Rp. {(item.total)?.toLocaleString()}</h3>
                  </div>
                </div>
              )
            })
          }
          {/* <div className={`${styles.item}`}>
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
          </div> */}

        </div>
        <div className={`${styles.summary}`}>
          <h3 className={`${styles['summary-title']}`}>Shopping summary</h3>
          <div className={`${styles.order}`}>
            <h4>Order</h4>
            <h4>Rp. {checkoutData ? (checkoutData[0].total).toLocaleString() : '0'}</h4>
          </div>
          <div className={`${styles.delivery}`}>
            <h4>Delivery</h4>
            <h4>Rp. {delivery.toLocaleString()}</h4>
          </div>
          <hr className={`${styles['hr-summary']}`} />
          <div className={`${styles['shop-summary']}`}>
            <h4>Total</h4>
            <h4>Rp. {checkoutData ? ((checkoutData[0].total) + delivery).toLocaleString() : '0'}</h4>
          </div>
          <button className={`${styles['payment-btn']}`}>select payment</button>
        </div>
      </section>
    </div>
  )
}

export default Checkout