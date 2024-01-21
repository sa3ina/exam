import React from 'react'
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, wishlistFunc } from '../redux/slices/Slice';
import { useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { data, loading, error, wishlist } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
    console.log(wishlist)
    const elem = data && data.find((elem) => elem.id == id)
    return (
        <>

            <div className='detail'>
                <p>{elem.name}</p>
                <p>{elem.desc}</p>
                <p>${elem.price}</p>
                <button className='heart' onClick={() => dispatch(wishlistFunc(elem))}>

                    <FavoriteBorderIcon /></button>
                <img src={elem.imgSrc} alt="" />
            </div>
        </>

    )
}

export default Detail