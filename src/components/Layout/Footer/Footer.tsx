import { useContext } from 'react';
import IconTwitter from '../../factory/Icon/IconTwitter/IconTwitter';
import IconLK from '../../factory/Icon/IconLK/IconLK';
import IconGH from '../../factory/Icon/IconGH/IconGH';
import { LightModeContext } from '../../../context/LightModeContext';
import Paragraph from '../../factory/Paragraph/Paragraph';
import './Footer.scss';

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <footer
      className={lightMode ? 'footer footer--light' : 'footer footer--dark'}
    >
      <ul className="footer__social">
        <li className="footer__logo">
          <a
            href="https://twitter.com/nowthisiscoding"
            target="_blank"
            rel="noreferrer"
          >
            <IconTwitter />
          </a>
        </li>
        <li className="footer__logo">
          <a href="https://github.com/ghsdl" target="_blank" rel="noreferrer">
            <IconGH />
          </a>
        </li>
        <li className="footer__logo">
          <a
            href="https://www.linkedin.com/in/maeva-ghsdl/"
            target="_blank"
            rel="noreferrer"
          >
            <IconLK />
          </a>
        </li>
      </ul>
      <Paragraph className="footer__copyright paragraph--lightBlue">
        Handcrafted with ♥ from my sofa, Maeva Ghsdl - © 2022
      </Paragraph>
    </footer>
  );
};

export default Footer;
