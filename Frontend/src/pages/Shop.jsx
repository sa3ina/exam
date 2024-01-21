import React from 'react'
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, wishlistFunc } from '../redux/slices/Slice';
import { useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom"
import { addToBasket } from '../redux/slices/Slice';
import { Helmet } from "react-helmet";

const Shop = () => {

    const dispatch = useDispatch();
    const { data, loading, error, wishlist } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
    return (
        <>

            <div className='shop'>
                <div className='container'>
                    <p className='adjust'>ADJUSTABLE STRAPS</p>
                    <p className='choose'>Choose the best color for your activity</p>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='grid'>
                        {data && data.map((elem, i) => {
                            return (
                                <Grid item xs={12} sm={4} md={4} xl={4} key={i} className='card'>
                                    <div className='text'>
                                        <Link to={`/${elem.id}`} className='link'>
                                            <p>{elem.name}</p>
                                        </Link>

                                        <p className='desc'>{elem.desc}</p>
                                        <p>${elem.price}</p>
                                        <button className='heart' onClick={() => dispatch(wishlistFunc(elem))}>
                                            {/* <FavoriteBorderIcon /> */}
                                            {wishlist.find((element) => element.id == elem.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                        </button>
                                        <button onClick={() => dispatch(addToBasket(elem))}>add to basket</button>
                                        <img src={elem.imgSrc} alt="" />

                                    </div>    </Grid>)

                        })}
                    </Grid >
                </div >
            </div ></>
    )
}

export default Shop