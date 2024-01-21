import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [open, setOpen] = useState(true)
    return (
        <>

            <div className='navbar'>  <div className='hamburger' onClick={() => setOpen(!open)}><MenuIcon /></div>
                <div className={open ? 'open' : "hamburgermenu"}>
                    <Link to="/" className='link'>
                        <p>Home</p>
                    </Link>
                    <Link to="/gallery" className='link'>
                        <p>Gallery</p>
                    </Link>
                    <Link to="/features" className='link'>
                        <p>Features</p>
                    </Link>
                    <Link to="/reviews" className='link'>
                        <p>Reviews</p>
                    </Link>
                    <Link to="/shop" className='link'>
                        <p>Shop</p>
                    </Link>
                    <Link to="/wishlist" className='link'>
                        <p>Wishlist</p>
                    </Link>
                    <Link to="/add" className='link'>
                        <p>Add</p>
                    </Link>
                    <Link to="/basket" className='link'>
                        <p>Basket</p>
                    </Link>
                </div>
                <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png" alt="" />

                <div className='links'>
                    <Link to="/" className='link'>
                        <p>Home</p>
                    </Link>
                    <Link to="/gallery" className='link'>
                        <p>Gallery</p>
                    </Link>
                    <Link to="/features" className='link'>
                        <p>Features</p>
                    </Link>
                    <Link to="/reviews" className='link'>
                        <p>Reviews</p>
                    </Link>
                    <Link to="/shop" className='link'>
                        <p>Shop</p>
                    </Link>
                    <Link to="/wishlist" className='link'>
                        <p>Wishlist</p>
                    </Link>
                    <Link to="/add" className='link'>
                        <p>Add</p>
                    </Link>
                    <Link to="/basket" className='link'>
                        <p>Basket</p>
                    </Link>
                </div>
                <div className='buy'>
                    <ShoppingBasketIcon style={{ color: "#61526B" }} />
                    <button>Buy Now</button>
                </div>
            </div></>
    )
}

export default Navbar