import React from 'react'
import { Helmet } from "react-helmet";

const Gallery = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gallery</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>Gallery</div></>
    )
}

export default Gallery