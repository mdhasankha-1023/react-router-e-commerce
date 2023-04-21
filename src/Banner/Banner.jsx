import React, { useEffect, useState } from 'react';
import './Banner.css'

const Banner = () => {
    const img = [
        '/public/pic/bnr-laptop.webp',
        '/public/pic/banner-mobile.webp',
        '/public/pic/watch.webp'
    ]

    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval( () => {
            setCurrentImg((currentImg + 1) % img.length);
        } , 5000)
        return () => clearInterval(interval)
    } ,[currentImg]);
    return (
        <div>
            <img className='bnr-img' src={img[currentImg]} alt="banner-img" />
        </div>
    );
};

export default Banner;