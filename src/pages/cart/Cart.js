import React, { useEffect, useState } from 'react'
import Navbar from '../../components/module/navbar/Navbar'
import Button from '../../components/base/button/button';
import styles from './Cart.module.css'
import axios from 'axios';

const Cart = () => {

    const [cartData, setCartData] = useState('')
    const [authToken, setauthToken] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let local
        let localData
        if (localStorage.getItem('BlanjaUser')) {
            local = localStorage.getItem('BlanjaUser')
            localData = JSON.parse(local)
            setauthToken(localData.token)
        }
    }, [])

    useEffect(() => {
        const fetchCart = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/cart`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            })

            // console.log(res.data.data)
            setCartData(res.data.data)
        }

        if (authToken) {
            fetchCart()
        }
    }, [authToken])

    useEffect(() => {
        if(cartData) {
            let total = 0
            cartData.forEach(item => {
                total = total + item.price_product
            })
            setTotalPrice(total)
        }
    }, [cartData])

    // console.log(totalPrice)
    console.log(cartData)

    return (
        <div className={`${styles['cart-container']}`}>
            <Navbar />

            <h1 className="my-bag">My Bag</h1>

            <section className={`${styles['cart-section']}`}>
                <div className={`${styles.items}`}>
                    <div className={`${styles.selection}`}>
                        <div className={`${styles.check}`}>
                            <input className={`${styles.checkbox}`} type="checkbox" />
                        </div>
                        <p className={`${styles.select}`}>Select all items <span className={`${styles.selected}`}>(<span>{cartData.length}</span> items selected)</span></p>
                        <p className={`${styles.del}`}>delete</p>
                    </div>

                    {/* Item */}
                    {!cartData ?
                        <p>Loading...</p>
                        :
                        cartData.length < 1 ?
                            <p>Cart is empty, let's add some products.</p>
                            :
                            cartData.map((item, idx) => {
                                return (
                                    <div key={idx} className={`${styles.item}`}>
                                        <div className={`${styles.check}`}>
                                            <input className={`${styles.checkbox}`} type="checkbox" />
                                        </div>
                                        <div className={`${styles.image}`}>
                                            <div className={`${styles.image_container}`}>
                                                <img
                                                    src={item.product_image ? item.product_image[0] : "https://fakeimg.pl/400x400/?text=product"} alt="Suit"
                                                />
                                            </div>
                                            <div className={`${styles['image-text']}`}>
                                                <h3>{item.name_product}</h3>
                                                <p>Zalora Cloth</p>
                                            </div>
                                        </div>
                                        <div className={`${styles.qty}`}>
                                            <p>-</p>
                                            <p>{item.qty}</p>
                                            <p>+</p>
                                        </div>
                                        <div className={`${styles.price}`}>
                                            <h3>Rp. {(item.price_product).toLocaleString()}</h3>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    {/* <div className={`${styles.item}`}>
                        <div className={`${styles.check}`}>
                            <input className={`${styles.checkbox}`} type="checkbox" />
                        </div>
                        <div className={`${styles.image}`}>
                            <img src="/assets/img/suit.png" alt="Suit" />
                            <div className={`${styles['image-text']}`}>
                                <h3>Men's formal suit - Black</h3>
                                <p>Zalora Cloth</p>
                            </div>
                        </div>
                        <div className={`${styles.qty}`}>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div className={`${styles.price}`}>
                            <h3>$ 20.00</h3>
                        </div>
                    </div>
                    <div className={`${styles.item}`}>
                        <div className={`${styles.check}`}>
                            <input className={`${styles.checkbox}`} type="checkbox" />
                        </div>
                        <div className={`${styles.image}`}>
                            <img src="./assets/img/denim-jacket.png" alt="Suit" />
                            <div className={`${styles['image-text']}`}>
                                <h3>Men's Jacket jeans</h3>
                                <p>Zalora Cloth</p>
                            </div>
                        </div>
                        <div className={`${styles.qty}`}>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div className={`${styles.price}`}>
                            <h3>$ 20.00</h3>
                        </div>
                    </div> */}
                    {/* Item end */}
                </div>
                <div className={`${styles.summary}`}>
                    <h3 className={`${styles['shop-summary']}`}>Shopping summary</h3>
                    <div className={`${styles['total-summary']}`}>
                        <h4 className={`${styles.total}`}>Total price</h4>
                        <h4 className={`${styles['total-price']}`}>Rp. {totalPrice.toLocaleString()}</h4>
                    </div>
                    <Button
                        text='Buy'
                        className={`${styles['buy-button']}`}
                    />
                </div>
            </section>

        </div>
    )
}

export default Cart