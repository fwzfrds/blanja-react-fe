import React, { useState, useEffect, useLayoutEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import styles from './detailProduct.module.css'
import Navbar from '../../../components/module/navbar/Navbar';
import Button from '../../../components/base/button/button';
import Card from '../../../components/base/card/card';

const DetailProduct = () => {

    const { id } = useParams()
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log('Fetching Data...')
                const result = await axios.get(`http://localhost:5000/v1/products/detail/${id}`)
                console.log(result.data);
                setProductData(result.data.data)
            } catch (error) {
                console.log(error);
                console.log('Fetch Data Error!');
            }
        }
        fetchData()
    }, [])

    console.log(typeof productData)

    // useLayoutEffect(() => {
    //     const img = productData.image
    //     console.log(img)
    //     const images = img.split(',')
    //     console.log(images)

    // }, [productData])

    // samapai sini kemarin

    return (
        <div>
            <Navbar />

            <nav className={`${styles['breadcrumb-container']}`}>
                <ol className={`${styles.breadcrumb}`}>
                    <li className={`${styles['breadcrumb-item-home']}`}>
                        <Link to="#">Home</Link>
                    </li>
                    <li className={`${styles['breadcrumb-item']}`}>
                        <Link to="#">Library</Link>
                    </li>
                    <li className={`${styles['breadcrumb-item']} ${styles.active}`}>Data</li>
                </ol>
            </nav>

            <main className={`${styles['product-container']}`}>
                <div className={`${styles['product-images']}`}>
                    <div className={`${styles['prod-img-container']}`}>
                        <img src={productData.image[0]} alt="" />
                    </div>
                    <div className={`${styles['img-thumbnail']}`}>
                        <img src="/assets/img/products/1.png" alt="" />
                        <img src="/assets/img/products/2.png" alt="" />
                        <img src="/assets/img/products/3.png" alt="" />
                        <img src="/assets/img/products/4.png" alt="" />
                        <img src="/assets/img/products/5.png" alt="" />
                    </div>
                </div>
                <div className={`${styles['product-details']}`}>
                    <h3 className={`${styles['product-name']}`}>{productData.name}</h3>
                    <p className={`${styles['category-name']}`}>{productData.name_category}</p>
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
                        <h3>Rp. {productData.price}</h3>
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
                                <span>28</span>
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
                    <p>{productData.description}</p>
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
            {/* <nav className={`${styles['breadcrumb-container']}`}>
                <ol className={`${styles.breadcrumb}`}>
                    <li className={`${styles['breadcrumb-item-home']}`}>
                        <Link to="#">Home</Link>
                    </li>
                    <li className={`${styles['breadcrumb-item']}`}>
                        <Link to="#">Library</Link>
                    </li>
                    <li className={`${styles['breadcrumb-item']} ${styles.active}`}>Data</li>
                </ol>
            </nav>

            <main className={`${styles['product-container']}`}>
                <div className={`${styles['product-images']}`}>
                    <div className={`${styles['prod-img-container']}`}>
                        <img src="/assets/img/products/main.png" alt="" />
                    </div>
                    <div className={`${styles['img-thumbnail']}`}>
                        <img src="/assets/img/products/1.png" alt="" />
                        <img src="/assets/img/products/2.png" alt="" />
                        <img src="/assets/img/products/3.png" alt="" />
                        <img src="/assets/img/products/4.png" alt="" />
                        <img src="/assets/img/products/5.png" alt="" />
                    </div>
                </div>
                <div className={`${styles['product-details']}`}>
                    <h3 className={`${styles['product-name']}`}>Baju muslim pria</h3>
                    <p className={`${styles['category-name']}`}>Muslim Wear</p>
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
                        <h3>$ 20.0</h3>
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
                                <span>28</span>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <p>Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec
                        pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis
                        blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel
                        suscipit ipsum.
                        Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit
                        magna.</p>

                    <p>Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec
                        Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec
                        pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis
                        blandit imperdiet ac ac felis.</p>

                    <p>In ultricies rutrum tempus. Mauris vel molestie orci.</p>
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
            </section> */}

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

        </div>
    )
}

export default DetailProduct