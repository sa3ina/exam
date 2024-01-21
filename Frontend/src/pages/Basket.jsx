import React from 'react'
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, decrease, fetchUserData, increase, removeFromBasket, wishlistFunc } from '../redux/slices/Slice';
import { useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Helmet } from "react-helmet";

const Basket = () => {
    const dispatch = useDispatch();
    const { data, loading, error, wishlist, basket } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
    console.log(basket)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Basket</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='basket'>
                <div className='container'>
                    <p className='adjust'>ADJUSTABLE STRAPS</p>
                    <p className='choose'>Choose the best color for your activity</p>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='grid'>
                        {basket && basket.map((elem, i) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={i} className='card'>
                                    <div className='text'>
                                        <p>{elem.name}</p>
                                        <p>{elem.desc}</p>
                                        <p>${elem.price}</p>
                                        <button className='heart' onClick={() => dispatch(wishlistFunc(elem))}>

                                            <FavoriteBorderIcon /></button>
                                        <p>quantity:{elem.quantity}</p>

                                        <button onClick={() => dispatch(increase(elem))}>+</button>
                                        <button onClick={() => dispatch(decrease(elem))}>-</button>
                                        <button onClick={() => dispatch(removeFromBasket(elem))}>remove</button>

                                        <img src={elem.imgSrc} alt="" />

                                    </div>    </Grid>)

                        })}
                    </Grid >
                </div >
            </div ></>
    )
}

export default Basket