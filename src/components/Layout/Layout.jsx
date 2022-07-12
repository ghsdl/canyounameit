import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import './Layout.scss';

const Layout = ({ headerMinimize, children }) => {
  return (
    <div className='Layout'>
      <BackToTopButton />
      <Header headerMinimize={headerMinimize} />
      <div className='Layout__content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
