import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './products.module.css'
import { Link, useSearchParams } from 'react-router-dom'

const GetProduct = () => {

    const [data, setData] = useState([])

    const fethData = async () => {
        try {
            const result = await axios.get('http://localhost:5000/v1/products/')
            console.log(result.data);
            setData(result.data.data)
        } catch (error) {
            console.log(error);
        }
        console.log('Get Products Success!');
    }

    useEffect(() => {
        console.log('Fetching The Data ...');
        fethData()
    }, [])

    // console.log(data);

    const [search, setSearch] = useState('')
    let [searchParams, setSearchParams] = useSearchParams({});
    const handleSearch = () => {
        const api = process.env.REACT_APP_API_BACKEND
        setSearchParams({ keyword: search })
    }
    useEffect(() => {
        console.log(searchParams.get('keyword'));
        const search = searchParams.get('keyword')
        const fethData = async () => {
            try {
                const result = await axios.get(`http://localhost:5000/v1/products?search=${search}`)
                console.log(result.data);
                setData(result.data.data)
            } catch (error) {
                console.log(error);
            }
            console.log('Search Products Success!');
        }

        fethData()
    }, [searchParams])

    return (
        <div>
            <div className={`${styles.container}`}>
                <input type="text" name="search" placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={handleSearch}>Cari</button>
                <p>hasil pencarian adalah = {searchParams.get('keyword')}</p>
                <h3 className={`${styles['new-title']}`}>New</h3>
                <p className={`${styles['new-text']}`}>You've never seen it before</p>
                <div className={`${styles.products}`}>
                    {data.map(item => {
                        return (
                            <Link to='#' key={item.id} className={`${styles['prod-card']}`}>
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
                            </Link>
                        )
                    })}
                    {/* <div className="prod-card">
                        <div className="prod-img-container">
                            <img src="./assets/img/suit-lscape.png" alt="suit" />
                        </div>
                        <div className="prod-name-container">
                            <h4 className="prod-name">Men's formal suit - Black & White</h4>
                            <h4 className="prod-price">$ 40.0</h4>
                            <h3 className="store-name">Zalora CLoth</h3>
                            <div className="prod-rate">
                                <img src="./assets/img/icon/Star.png" alt="rating" />
                                <img src="./assets/img/icon/Star.png" alt="rating" />
                                <img src="./assets/img/icon/Star.png" alt="rating" />
                                <img src="./assets/img/icon/Star.png" alt="rating" />
                                <img src="./assets/img/icon/Star.png" alt="rating" />
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>


    )
}

export default GetProduct