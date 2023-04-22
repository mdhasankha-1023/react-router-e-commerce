import React from 'react';
import TopNav from '../TopNav/TopNav';
import MainNav from '../MainNav/MainNav';
import BottomNav from '../BottomNav/BottomNav';

const Header = () => {
    return (
        <div>
            <TopNav></TopNav>
            <MainNav></MainNav>
            <BottomNav></BottomNav>
        </div>
    );
};

export default Header;