import { faBox, faClock, faMoneyBill, faSwatchbook, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OtherServices = () => {
    return (
        <div className='w-11/12 mx-auto mt-16'>
            <div className="delivery flex justify-around items-center py-14 bg-white">
                    <div className='flex items-center text-2xl'>
                    <FontAwesomeIcon className='text-5xl me-8' icon={faTruck}></FontAwesomeIcon>
                    <p>Curb-side<br/>pickup</p>
                    </div>
                    <div className='flex items-center text-2xl'>
                    <FontAwesomeIcon className='text-5xl me-8' icon={faBox}></FontAwesomeIcon>
                    <p>Free shipping on<br />orders over $50</p>
                    </div>
                    <div className='flex items-center text-2xl'>
                    <FontAwesomeIcon className='text-5xl me-8' icon={faMoneyBill}></FontAwesomeIcon>
                    <p>Low prices<br/> guaranteed</p>
                    </div>
                    <div className='flex items-center text-2xl'>
                    <FontAwesomeIcon className='text-5xl me-8' icon={faClock}></FontAwesomeIcon>
                    <p>Available<br/>to you 24/7 </p>
                    </div>
                </div>
        </div>
    );
};

export default OtherServices;