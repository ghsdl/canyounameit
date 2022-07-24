import { useContext } from 'react';
import { LightModeContext } from '../../context/LightMode';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BackToTopButton from '../factory/BackToTopButton/BackToTopButton';
import LightSwitchButton from '../factory/LightSwitchButton/LightSwitchButton';
import './Layout.scss';

interface ILayoutProps {
  headerMinimize: boolean;
  children: React.ReactNode;
}

const Layout = ({ headerMinimize, children }: ILayoutProps) => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <div className={lightMode ? 'layout layout--light' : 'layout layout--dark'}>
      <LightSwitchButton />
      <BackToTopButton />
      <Header headerMinimize={headerMinimize} />
      <div className='layout__content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
