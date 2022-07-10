import React from 'react';
import Icon from '../Icon/Icon';
import Paragraph from '../Paragraph/Paragraph';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__social'>
        <li className='footer__logo'>
          <a
            href='https://twitter.com/nowthisiscoding'
            target='_blank'
            rel='noreferrer'
            alt='Twitter'
          >
            <Icon icon='TWITTER' className='icon__twitter' />
          </a>
        </li>
        <li className='footer__logo'>
          <a
            href='https://github.com/ghsdl'
            target='_blank'
            rel='noreferrer'
            alt='GitHub'
          >
            <Icon icon='GITHUB' className='icon__github' />
          </a>
        </li>
        <li className='footer__logo'>
          <a
            href='https://www.linkedin.com/in/maeva-ghsdl/'
            target='_blank'
            rel='noreferrer'
            alt='LinkedIn'
          >
            <Icon icon='LINKEDIN' className='icon__linkedin' />
          </a>
        </li>
      </ul>
      <Paragraph
        label='Handcrafted with ♥ from my sofa, Maeva Ghsdl - © 2022'
        className='footer__copyright paragraph--lightBlue'
      />
    </footer>
  );
};

export default Footer;
