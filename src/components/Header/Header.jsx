import React from 'react';
import HEADER_LOGO from '../../assets/images/HEADER_LOGO.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={HEADER_LOGO} alt='logo' />
      <h1 className='header__title'>Can you name it ?</h1>
    </header>
  );
};

export default Header;
