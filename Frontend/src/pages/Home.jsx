import React from 'react'
import Features from "./Features"
import Gallery from "./Gallery"
import Shop from "./Shop"
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Features />
            <Shop />
        </>
    )
}

export default Home