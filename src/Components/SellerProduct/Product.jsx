import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product.img_url)
    const {img_url, title, price, stock} = product;

    return (
        <div className='w-56 bg-white border border-slate-300  relative'>
            <img className='w-full' src={img_url} alt="" />
            <p className='absolute top-3 left-2 text-xl bg-red-600 text-white px-3 rounded-full'>{stock}</p>
            <h2 className='p-2'>{title}</h2>
            <h4 className='pb-4 ps-2 text-xl text-purple-500'>Price: $<span>{price}</span></h4>
        </div>
    );
};

export default Product;