import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './products.module.css'
import { NavLink, useSearchParams } from 'react-router-dom'
import Card from '../../../components/base/card/card';
import { getProducts, searchProducts } from '../../../config/redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../../components/module/navbar/Navbar';
import Loading from '../../../components/base/loading/Loading';

const GetProduct = () => {

    const [data, setData] = useState([])
    const { isLoading, products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const fethData = async (page, sortorder) => {
        try {
            dispatch(getProducts(page, sortorder))
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
        fethData(1, 'asc')
    }, [])

    // console.log(data);

    const [search, setSearch] = useState('')
    let [searchParams, setSearchParams] = useSearchParams({});
    const handleSearch = () => {
        const api = process.env.REACT_APP_API_BACKEND
        setSearchParams({ keyword: search })
    }
    useEffect(() => {
        // console.log(searchParams.get('keyword'));
        let search = searchParams.get('keyword')
        console.log(search)
        if (search === null) {
            search = ''
        }
        const fethData = async () => {
            try {
                dispatch(searchProducts(search))
                // const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/products?search=${search}`)
                // console.log(result.data);
                // setData(result.data.data)
                // let result = (products.data).filter((item) => {
                //     return (item.name).match(new RegExp(search, 'i'))
                // }
                // )
                // console.log(result)
            } catch (error) {
                console.log(error);
            }
            console.log('Search Products Success!');
        }

        fethData()
    }, [searchParams])

    console.log('products data :')
    console.log(products.data)

    const [currentPage, setcurrentPage] = useState(1)

    const handlePage = (page) => {
        // console.log(e)
        console.log('Sedang menjalankan pagination...')
        fethData(page)
    }

    const handleSort = (sortorder) => {
        console.log(sortorder)
        console.log('Sort Berhasil!')
        fethData(1, sortorder)
    }

    return (
        <div>
            <Navbar />
            <div className={`${styles.container}`}>
                <div className={`${styles['actions-container']}`}>
                    <div className={`${styles['search-container']}`}>
                        <input type="text" name="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={handleSearch}>Cari</button>
                        <p>hasil pencarian adalah = {searchParams.get('keyword')}</p>
                    </div>
                    <div className={`${styles['filter-container']}`}>
                        <button onClick={()=>handleSort('asc')}>ASC</button>
                        <button onClick={()=>handleSort('desc')}>DESC</button>
                    </div>
                </div>


                <div className={`${styles.products}`}>
                    {products.data ? (products.data).map(item => (
                        <Card
                            to={`/detail-product/${item.id}`}
                            className={`${styles['prod-card']}`}
                        >
                            <div className={`${styles['prod-img-container']}`}>
                                <img src="./assets/img/suit-lscape.png" alt="suit" />
                            </div>
                            <div className={`${styles['prod-name-container']}`} key={item.id}>
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
                        <Loading />
                    }
                </div>
                <div className={`${styles['page-container']}`}>
                    <button
                        className={`${styles.active}`}
                        onClick={() => handlePage(1)}
                    >1
                    </button>

                    <button
                        onClick={() => handlePage(2)}
                    >2
                    </button>
                </div>
            </div>
        </div>


    )
}

export default GetProduct