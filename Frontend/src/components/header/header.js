import React from 'react';
import './header.style.scss';
import logo from '../../assets/images/logo.png';

const header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='left-section'>
                <img src={logo} alt='logo-icon' className='logo'/>
            </div>
            <div className='right-section'>
                <ul className='header-links'>
                    <li className='header-link'>All Blogs</li>
                    <li className='header-link'>My Blogs</li>
                    <li className='header-link'>Add Blog</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default header;