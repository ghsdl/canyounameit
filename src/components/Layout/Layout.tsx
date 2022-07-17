import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BackToTopButton from '../factory/BackToTopButton/BackToTopButton';
import './Layout.scss';
import { ILayoutProps } from '../interfaces';

const Layout = ({ headerMinimize, children }: ILayoutProps) => {
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
