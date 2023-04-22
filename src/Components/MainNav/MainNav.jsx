import React from 'react';
import './MainNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarAlt, faHeart, faHeartBroken, faSearch, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const MainNav = () => {
    return (
        <div>
            <div className='py-4 w-11/12 mx-auto flex justify-between items-center'>
                <div className='main-nav-left flex items-center'>
                    <h2 className='text-5xl'>TechShed</h2>
                    <div className="form-control ms-12">
                    <div className="input-group flex">
                    <input type="text" placeholder="Search…" className="input input-bordered py-2 px-12 bg-gray-300 rounded-l-full" />
                    <button className="btn btn-square rounded-r-full text-2xl border py-3 px-8 text-white bg-purple-600">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                    </div>
                    </div>
                </div>
                <div className="main-nav-right flex">
                    <h3 className='text-2xl me-8'><FontAwesomeIcon icon={faUserAlt} className='me-4'></FontAwesomeIcon>
                        Login</h3>
                    <h3  className='text-2xl me-8'><FontAwesomeIcon icon={faHeart}  className='me-4'></FontAwesomeIcon>
                        Favorites</h3>
                    <p  className='text-2xl me-8'><FontAwesomeIcon icon={faShoppingCart}  className='me-4'></FontAwesomeIcon>
                        0</p>
                </div>
            </div>
        </div>
    );
};

export default MainNav;