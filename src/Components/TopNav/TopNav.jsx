import React from 'react';
import './TopNav.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
    return (
        <div className='bg-black text-white py-4'>
            <div className='flex justify-between w-11/12 mx-auto'>
            <p className='text-xl'><FontAwesomeIcon className='text-3xl me-4' icon={faBox}></FontAwesomeIcon>
                Free Shipping for orders over 50$</p>
            <div className="nav">
                <Link className='underline' to='/about'>About</Link>
                <Link className='underline' to='/contact'>Contact</Link>
                <Link className='underline' to='/help'>Help Center</Link>
                <p className='inline me-4'>Call us: <span className='underline'>01646448338</span></p>
            </div>
            </div>
        </div>
    );
};

export default TopNav;