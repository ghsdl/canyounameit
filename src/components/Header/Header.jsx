import React from 'react';
import HEADER_LOGO from '../../assets/images/HEADER_LOGO.svg';
import './Header.scss';

const Header = ({ headerMinimize }) => {
  return (
    <header className='header'>
      <img
        className={
          headerMinimize
            ? 'header__logo header__logo--small'
            : 'header__logo header__logo--big'
        }
        src={HEADER_LOGO}
        alt='logo'
      />
      <h1
        className={
          headerMinimize
            ? 'header__title header__title--small'
            : 'header__title header__title--big'
        }
      >
        Can you name it ?
      </h1>
    </header>
  );
};

export default Header;
