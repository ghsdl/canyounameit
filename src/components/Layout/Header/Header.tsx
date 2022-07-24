import './Header.scss';
import HEADER_LOGO from '../../../assets/images/HEADER_LOGO.svg';

interface IHeaderProps {
  headerMinimize: boolean;
}

const Header = ({ headerMinimize }: IHeaderProps) => {
  return (
    <header className="header">
      <a href="/">
        <img
          className={
            headerMinimize
              ? 'header__logo header__logo--small'
              : 'header__logo header__logo--big'
          }
          src={HEADER_LOGO}
          alt="logo"
        />
      </a>
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
