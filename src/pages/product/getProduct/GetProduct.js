import React, { useEffect, useState } from 'react'
import styles from './products.module.css'
import { useSearchParams } from 'react-router-dom'
import Card from '../../../components/base/card/card';
import { getProducts, searchProducts } from '../../../config/redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../../components/module/navbar/Navbar';
import Loading from '../../../components/base/loading/Loading';
import Button from '../../../components/base/button/button';

const GetProduct = () => {

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
        // const api = process.env.REACT_APP_API_BACKEND
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
    console.log(searchParams)

    const handlePage = (page) => {
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
                        <Button
                            text={<i className="fa-solid fa-magnifying-glass"></i>}
                            onClick={handleSearch}
                            style={{
                                background: '#DB3022',
                                color: '#FFF',
                                border: '1px solid black',
                                borderLeft: 'none',
                                height: 30,
                                borderRadius: '0 5px 5px 0'
                            }}
                        />
                        {/* <p>hasil pencarian adalah = {searchParams.get('keyword')}</p> */}
                    </div>
                    <div className={`${styles['filter-container']}`}>
                        <h4>Price : </h4>
                        <button onClick={() => handleSort('asc')}><i className="fa-solid fa-down-long"></i></button>
                        <button onClick={() => handleSort('desc')}><i className="fa-solid fa-arrow-up"></i></button>
                    </div>
                </div>

                <div className={`${styles.products}`}>
                    {isLoading === false ? (products.data).map((item, idx) => (
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
                <div className={`${styles['page-container']}`}>
                    {/* <button
                        className={`${styles.active}`}
                        onClick={() => handlePage(1)}
                    >1
                    </button>

                    <button
                        onClick={() => handlePage(2)}
                    >2
                    </button> */}
                    {new Array(products.pagination.totalPage).fill().map((item, index) =>
                        <Button
                            onClick={() => handlePage(index + 1)}
                            text={index + 1}
                            key={index}
                        >
                        </Button>)}
                </div>
            </div>
        </div>


    )
}

export default GetProduct