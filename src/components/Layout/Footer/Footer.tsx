import { useContext } from 'react';
import Icon from '../../factory/Icon/Icon';
import { LightModeContext } from '../../../context/LightModeContext';
import Paragraph from '../../factory/Paragraph/Paragraph';
import { RiGithubLine, RiLinkedinBoxLine, RiTwitterLine } from 'react-icons/ri';
import './Footer.scss';

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <footer
      className={`footer ${lightMode ? ' footer--light' : 'footer--dark'}`}
    >
      <ul className="footer__social">
        <li className="footer__social__logo">
          <a
            href="https://twitter.com/nowthisiscoding"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon={<RiTwitterLine />}
              className="footer__social__logo--twitter"
            />
          </a>
        </li>
        <li className="footer__social__logo">
          <a href="https://github.com/ghsdl" target="_blank" rel="noreferrer">
            <Icon
              icon={<RiGithubLine />}
              className="footer__social__logo--gh"
            />
          </a>
        </li>
        <li className="footer__social__logo">
          <a
            href="https://www.linkedin.com/in/maeva-ghsdl/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon={<RiLinkedinBoxLine />}
              className="footer__social__logo--lk"
            />
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
