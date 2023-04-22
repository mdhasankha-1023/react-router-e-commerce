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
        <div className='bnr-container'>
            <img className='bnr-img' src={img[currentImg]} alt="" /> 
            <div className="bnr-text">
                <p className='text-2xl bg-red-500 text-white inline px-2'>Best Prices</p>
                <h2 className='text-7xl py-4 font-semibold leading-tight'>Incredible Prices<br/> on All Your<br />Favorite Items</h2>
                <h5 className='text-2xl my-3'>Get more for less on selected brands</h5>
                <button className='px-16 py-4 bg-purple-600 rounded-full text-white text-xl mt-8'>Shop now</button>
            </div>
        </div>
    );
};

export default Banner;