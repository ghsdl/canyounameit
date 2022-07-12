import React, { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './BackToTopButton.scss';

const BackToTopButton = () => {
  const [displayBackToTopButton, setDisplayBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setDisplayBackToTopButton(true);
      } else {
        setDisplayBackToTopButton(false);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='backToTopButton'>
      {displayBackToTopButton && (
        <Icon
          icon='ARROW_UP'
          className='backToTopButton__icon backToTopButton__position'
          onClick={backToTop}
        />
      )}
    </div>
  );
};

export default BackToTopButton;
