import React, { useState, useEffect, useLayoutEffect } from 'react'
// import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom'
import styles from './DetailProduct.module.css'
import Navbar from '../../../components/module/navbar/Navbar';
import Button from '../../../components/base/button/button';
import Card from '../../../components/base/card/card';
import { detailProduct } from '../../../config/redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const DetailProduct = () => {


    const [productData, setProductData] = useState(null)
    const location = useLocation()
    const { id } = useParams()
    const [prodImg, setProdImg] = useState('')
    // const { isLoading, products } = useSelector((state) => state.products)
    const { productDetail } = useSelector((state) => state.productDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        if(productDetail.image) {
            setProdImg(productDetail.image)
        }
    }, [productDetail.image])

    useEffect(() => {
        console.log('dispatch run...')
        console.log(`You changed the page to: ${location.pathname}`)
        dispatch(detailProduct(id))
        // console.log(products)
        // setProductData(productDetail)
    }, [location])

    useLayoutEffect(() => {
        console.log(productDetail)
        setProductData(productDetail)
    }, [productDetail])

    // setProductData(products)

    console.log(productDetail)
    console.log(productData)
    console.log(prodImg)

    return (
        <div>
            <Navbar />

            <nav className={`${styles['breadcrumb-container']}`}>
                <ol className={`${styles.breadcrumb}`}>
                    <li className={`${styles['breadcrumb-item-home']}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`${styles['breadcrumb-item']}`}>
                        <Link to="/get-products">Library</Link>
                    </li>
                    <li className={`${styles['breadcrumb-item']} ${styles.active}`}>{productData !== null ? productData.name : 'Data'}</li>
                </ol>
            </nav>

            <main className={`${styles['product-container']}`}>
                <div className={`${styles['product-images']}`}>
                    <div className={`${styles['prod-img-container']}`}>
                        <img src={prodImg ? prodImg[0] : 'https://fakeimg.pl/400x400/?text=product'} alt="" />
                        {/* <img src={productData !== null ? productData.image[0] : '/assets/img/products/1.png'} alt="" /> */}
                    </div>
                    <div className={`${styles['img-thumbnail']}`}>
                        {prodImg && prodImg.map((img, idx) => {
                            return (
                                <div key={idx} className={`${styles.img_thumb}`}>
                                    <img src={img} alt="" />
                                </div>
                            )
                        })}
                        {/* <img src="/assets/img/products/2.png" alt="" />
                        <img src="/assets/img/products/3.png" alt="" />
                        <img src="/assets/img/products/4.png" alt="" />
                        <img src="/assets/img/products/5.png" alt="" /> */}
                    </div>
                </div>
                <div className={`${styles['product-details']}`}>
                    <h3 className={`${styles['product-name']}`}>{productData !== null ? productData.name : 'Loading...'}</h3>
                    <p className={`${styles['category-name']}`}>{productData !== null ? productData.name_category : 'Loading...'}</p>
                    <div className={`${styles.rating}`}>
                        <div className={`${styles.stars}`}>
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                        </div>
                        <p className={`${styles['qty-sold']}`}>(10)</p>
                    </div>
                    <div className={`${styles.price}`}>
                        <p>price</p>
                        <h3>Rp. {productData !== null ? productData.price : 'Loading...'}</h3>
                    </div>
                    <div className={`${styles['product-color']}`}>
                        <p>color</p>
                        <div className={`${styles['color-items']}`}>
                            <div className={`${styles.color1} ${styles.selected}`}></div>
                            <div className={`${styles.color2}`}></div>
                            <div className={`${styles.color3}`}></div>
                            <div className={`${styles.color4}`}></div>
                        </div>
                    </div>
                    <div className={`${styles['size-qty']}`}>
                        <div>
                            <p>Size</p>
                            <div className={`${styles.sizes}`}>
                                <span className={`${styles.decrease}`}>-</span>
                                <span>M</span>
                                <span className={`${styles.increase}`}>+</span>
                            </div>
                        </div>
                        <div>
                            <p>Jumlah</p>
                            <div className={`${styles.quantity}`}>
                                <span className={`${styles.decrease}`}>-</span>
                                <span>1</span>
                                <span className={`${styles.increase}`}>+</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['action-btn']}`}>
                        <Button
                            text='Chat'
                            className={`${styles['chat-btn']}`}
                        >
                        </Button>
                        <Button
                            text='Add to Bag'
                            className={`${styles['add-btn']}`}
                        >
                        </Button>
                        <Button
                            text='Buy Now'
                            className={`${styles['buy-btn']}`}
                        >
                        </Button>
                    </div>
                </div>
            </main>

            <section className={`${styles['product-info']}`}>
                <h3 className={`${styles['info-title']}`}>Informasi Produk</h3>
                <div className={`${styles.condition}`}>
                    <h4>Condition</h4>
                    <p>New</p>
                </div>
                <div className={`${styles.description}`}>
                    <h3 className={`${styles['desc-title']}`}>Description</h3>
                    <p>{productData !== null ? productData.description : 'Loading'}</p>
                </div>
            </section>

            <section className={`${styles['product-review']}`}>
                <h3 className={`${styles.title}`}>Product Review</h3>
                <div className={`${styles.review}`}>
                    <div className={`${styles['review-rate']}`}>
                        <div>
                            <h3>5.0</h3>
                            <p>/10</p>
                        </div>
                        <div className={`${styles['review-stars']}`}>
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                            <img src="/assets/img/icon/Star.png" alt="" />
                        </div>
                    </div>
                    <div className={`${styles['rate-detail']}`}>
                        <div className={`${styles['rate-stars']}`}>
                            <div>
                                <img src="/assets/img/icon/Star.png" alt="" />
                                <span>5</span>
                            </div>
                            <div>
                                <img src="/assets/img/icon/Star.png" alt="" />
                                <span>4</span>
                            </div>
                            <div>
                                <img src="/assets/img/icon/Star.png" alt="" />
                                <span>3</span>
                            </div>
                            <div>
                                <img src="/assets/img/icon/Star.png" alt="" />
                                <span>2</span>
                            </div>
                            <div>
                                <img src="/assets/img/icon/Star.png" alt="" />
                                <span>1</span>
                            </div>
                        </div>
                        <div className={`${styles['rate-length']}`}>
                            <span className={`${styles.rate5}`}></span>
                            <span className={`${styles.rate4}`}></span>
                            <span className={`${styles.rate3}`}></span>
                            <span className={`${styles.rate2}`}></span>
                            <span className={`${styles.rate1}`}></span>
                        </div>
                        <div className={`${styles['rate-qty-sold']}`}>
                            <span>4</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr className={`${styles['hr-separator']}`} />

            <section className={`${styles['another-container']}`}>
                <h3>You can also like this</h3>
                <p>You've never seen it before!</p>
                <div className={`${styles['products-container']}`}>
                    <Card
                        className={`${styles['product-card']}`}
                        to='#'
                    >
                        <div className={`${styles['product-img']}`}>
                            <img src="/assets/img/suit-lscape.png" alt="" />
                        </div>
                        <h3 className={`${styles['prod-name']}`}>Men's formal suit - Black & White</h3>
                        <h4 className={`${styles['prod-price']}`}>$ 40.0</h4>
                        <h4 className={`${styles['prod-category']}`}>Suit</h4>
                    </Card>
                    {/* <div className={`${styles['product-card']}`}>
                        <div className={`${styles['product-img']}`}>
                            <img src="/assets/img/suit-lscape.png" alt="" />
                        </div>
                        <h3 className={`${styles['prod-name']}`}>Men's formal suit - Black & White</h3>
                        <h4 className={`${styles['prod-price']}`}>$ 40.0</h4>
                        <h4 className={`${styles['prod-category']}`}>Suit</h4>
                    </div> */}
                </div>
            </section>

            {/* <h1>{productData ? productData.name : 'Loading'}</h1> */}

        </div>
    )
}

export default DetailProduct