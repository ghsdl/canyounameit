import React, { useContext } from 'react';
import { LightModeContext } from '../../context/LightModeContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BackToTop from '../features/BackToTop/BackToTop';
import LightSwitch from '../features/LightMode/LightMode';
import './Layout.scss';

interface LayoutProps {
  headerMinimize: boolean;
  children: React.ReactNode;
}

const Layout = ({ headerMinimize, children }: LayoutProps) => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <div className={`layout ${lightMode ? 'layout--light' : 'layout--dark'}`}>
      <LightSwitch />
      <BackToTop />
      <Header headerMinimize={headerMinimize} />
      <div className="layout__content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
