import React, { useEffect } from 'react'
import styles from './productsData.module.css'
// import { Link, useSearchParams } from 'react-router-dom'
import Card from '../../../components/base/card/card';
import {getProducts} from '../../../config/redux/actions/productAction'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from '../../../components/module/navbar/Navbar';
import Loading from '../../../components/base/loading/Loading';

const ProductsData = () => {

    // const [data, setData] = useState([])
    const {isLoading, products} = useSelector((state)=>state.products)
    const dispatch = useDispatch()

    const fethData = async () => {
        try {
            dispatch(getProducts())
            // const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/products/`)
            // console.log(result.data);
            // setData(result.data.data)
        } catch (error) {
            console.log(error);
        }
        console.log('Get Products Success!');
    }

    useEffect(() => {
        console.log('Fetching The Data ...');
        fethData()
    }, [])

    console.log(products)
    console.log(products.data)
    console.log(isLoading)

    return (
        <div>
            <Navbar />
            <div className={`${styles.container}`}>
                <h3 className={`${styles['new-title']}`}>New</h3>
                <p className={`${styles['new-text']}`}>You've never seen it before</p>
                <div className={`${styles.products}`}>
                    {isLoading === false ? (products.data)?.map(item => (
                        <Card
                            to={`/detail-product/${item.id}`}
                            key={item.id}
                            className={`${styles['prod-card']}`}
                        >
                            <div className={`${styles['prod-img-container']}`}>
                                <img src="./assets/img/suit-lscape.png" alt="suit" />
                            </div>
                            <div className={`${styles['prod-name-container']}`}>
                                <h4 className={`${styles['prod-name']}`}>{item.name}</h4>
                                <h4 className={`${styles['prod-price']}`}>Rp. {item.price}</h4>
                                <h3 className={`${styles['store-name']}`}>Zalora CLoth</h3>
                                <div className={`${styles['prod-rate']}`}>
                                    <img src="./assets/img/icon/Star.png" alt="rating" />
                                    <img src="./assets/img/icon/Star.png" alt="rating" />
                                    <img src="./assets/img/icon/Star.png" alt="rating" />
                                    <img src="./assets/img/icon/Star.png" alt="rating" />
                                    <img src="./assets/img/icon/Star.png" alt="rating" />
                                </div>
                            </div>
                        </Card>
                    )
                    ) :
                    <Loading 
                        style={{ 
                            position: 'absolute',
                            width: '90vw'
                         }}
                    />
                    }
                </div>
            </div>
        </div>


    )
}

export default ProductsData