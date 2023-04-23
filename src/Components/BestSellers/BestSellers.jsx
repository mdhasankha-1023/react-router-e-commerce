import React, { useEffect, useState } from 'react';
import './BestSellers.css'
import Product from '../SellerProduct/Product';

const BestSellers = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('/public/BestSellerData.js')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div className='mt-8 w-11/12 mx-auto py-12 px-12 bg-white'>
            <h1 className='text-center text-3xl font-semibold'>Best Sellers</h1>
            <div className='grid grid-cols-5 mt-8 gap-y-7'>
            {
                products.map(product => <Product key={product.id}
                product={product}></Product>)
            }
            
        </div>
        <div className='flex justify-center'>
        <button className='px-20 py-2 bg-purple-600 rounded-full text-white text-xl mt-8'>View All</button>
        </div>
        </div>
    );
};

export default BestSellers;