import { useContext } from 'react';
import Icon from '../../factory/Icon/Icon';
import { LightModeContext } from '../../../context/LightMode';
import Paragraph from '../../factory/Paragraph/Paragraph';
import './Footer.scss';

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);
  return (
    <footer
      className={lightMode ? 'footer footer--light' : 'footer footer--dark'}
    >
      <ul className='footer__social'>
        <li className='footer__logo'>
          <a
            href='https://twitter.com/nowthisiscoding'
            target='_blank'
            rel='noreferrer'
          >
            <Icon icon='TWITTER' className='icon__twitter' />
          </a>
        </li>
        <li className='footer__logo'>
          <a href='https://github.com/ghsdl' target='_blank' rel='noreferrer'>
            <Icon icon='GITHUB' className='icon__github' />
          </a>
        </li>
        <li className='footer__logo'>
          <a
            href='https://www.linkedin.com/in/maeva-ghsdl/'
            target='_blank'
            rel='noreferrer'
          >
            <Icon icon='LINKEDIN' className='icon__linkedin' />
          </a>
        </li>
      </ul>
      <Paragraph className='footer__copyright paragraph--lightBlue'>
        Handcrafted with ♥ from my sofa, Maeva Ghsdl - © 2022
      </Paragraph>
    </footer>
  );
};

export default Footer;
