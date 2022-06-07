import React from 'react'
import Navbar from '../../components/module/navbar/Navbar'
import Button from '../../components/base/button/button';
import styles from './Cart.module.css'

const Cart = () => {
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
                        <p className={`${styles.select}`}>Select all items <span className={`${styles.selected}`}>(<span>2</span> items selected)</span></p>
                        <p className={`${styles.del}`}>delete</p>
                    </div>

                    {/* Item */}
                    <div className={`${styles.item}`}>
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
                    </div>
                    {/* Item end */}
                </div>
                <div className={`${styles.summary}`}>
                    <h3 className={`${styles['shop-summary']}`}>Shopping summary</h3>
                    <div className={`${styles['total-summary']}`}>
                        <h4 className={`${styles.total}`}>Total price</h4>
                        <h4 className={`${styles['total-price']}`}>$ 40.0</h4>
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