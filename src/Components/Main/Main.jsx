import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import OtherServices from '../OtherServices/OtherServices';
import BestSellers from '../BestSellers/BestSellers';

const Main = () => {
    return (
        <div className='bg-gray-200'>
            <Banner></Banner>
            <Services></Services>
            <OtherServices></OtherServices>
            <BestSellers></BestSellers>
        </div>
    );
};

export default Main;