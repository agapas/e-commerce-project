import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

export const Header = () => (
  <div className='header'>
    <Link className='brand-container' to='/'>
      <Logo className='logo' />
      <div className='name'>Camera Shop</div>
    </Link>
    <div className='menu-options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/'>Contact</Link>
    </div>
  </div>
);
