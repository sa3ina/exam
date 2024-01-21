import React from 'react'
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, wishlistFunc } from '../redux/slices/Slice';
import { useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Helmet } from "react-helmet";

const Wishlist = () => {
    const dispatch = useDispatch();
    const { data, loading, error, wishlist } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
    console.log(wishlist)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='wishlist'>
                <div className='container'>
                    <p className='adjust'>ADJUSTABLE STRAPS</p>
                    <p className='choose'>Choose the best color for your activity</p>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='grid'>
                        {wishlist && wishlist.map((elem, i) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={i} className='card'>
                                    <div className='text'>
                                        <p>{elem.name}</p>
                                        <p>{elem.desc}</p>
                                        <p>${elem.price}</p>
                                        <button className='heart' onClick={() => dispatch(wishlistFunc(elem))}>

                                            <FavoriteIcon /></button>
                                        <img src={elem.imgSrc} alt="" />

                                    </div>    </Grid>)

                        })}
                    </Grid >
                </div >
            </div ></>
    )
}

export default Wishlist