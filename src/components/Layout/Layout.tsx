import Header from './Header/Header';
import Footer from './Footer/Footer';
import BackToTopButton from '../factory/BackToTopButton/BackToTopButton';
import './Layout.scss';
import { ILayoutProps } from '../interfaces';

const Layout = ({ headerMinimize, children }: ILayoutProps) => {
  return (
    <div className='layout'>
      <BackToTopButton />
      <Header headerMinimize={headerMinimize} />
      <div className='layout__content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
