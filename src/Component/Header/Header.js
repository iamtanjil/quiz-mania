import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h3>Quiz Mania</h3>
            <div className="nav-link">
                <Link to='/home'>Home</Link>
                <Link to='/Statistic'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;