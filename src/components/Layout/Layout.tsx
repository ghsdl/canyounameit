import { useContext } from 'react';
import { LightModeContext } from '../../context/LightMode';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BackToTop from '../features/BackToTop/BackToTop';
import LightSwitch from '../features/LightMode/LightMode';
import './Layout.scss';

interface ILayoutProps {
  headerMinimize: boolean;
  children: React.ReactNode;
}

const Layout = ({ headerMinimize, children }: ILayoutProps) => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <div className={lightMode ? 'layout layout--light' : 'layout layout--dark'}>
      <LightSwitch />
      <BackToTop />
      <Header headerMinimize={headerMinimize} />
      <div className='layout__content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
