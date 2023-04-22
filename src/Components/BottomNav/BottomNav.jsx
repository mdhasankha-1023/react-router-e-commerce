import React from 'react';
import './BottomNav.css'
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className='bg-gray-300 py-4'>
            <div className='btm-nav-container w-11/12 mx-auto'>
            <Link to='/shop-all'>Shop All</Link>
            <Link to='/computers'>Computers</Link>
            <Link to='/tablets'>Tablets</Link>
            <Link to='/drones'>Drones & Cameras</Link>
            <Link to='/audio'>Audio</Link>
            <Link to='/mobile'>Mobile</Link>
            <Link to='/tv'>Tv & Home Cinema</Link>
            <Link to='/wearable'>Wearable Teach</Link>
            <Link to='/sale'>Sale</Link>
        </div>
        </div>
    );
};

export default BottomNav;