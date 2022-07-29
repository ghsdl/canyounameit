import './Header.scss';
import HEADER_LOGO from '../../../assets/images/HEADER_LOGO.svg';

interface HeaderProps {
  headerMinimize: boolean;
}

const Header = ({ headerMinimize }: HeaderProps) => (
  <header className="header">
    <a href="/">
      <img
        className={`header__logo ${
          headerMinimize ? 'header__logo--small' : 'header__logo--big'
        }`}
        src={HEADER_LOGO}
        alt="logo"
      />
    </a>
    <h1
      className={`header__title ${
        headerMinimize ? 'header__title--small' : 'header__title--big'
      }`}
    >
      Can you name it ?
    </h1>
  </header>
);

export default Header;
