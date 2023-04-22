import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import OtherServices from '../OtherServices/OtherServices';

const Main = () => {
    return (
        <div className='bg-gray-200'>
            <Banner></Banner>
            <Services></Services>
            <OtherServices></OtherServices>
        </div>
    );
};

export default Main;