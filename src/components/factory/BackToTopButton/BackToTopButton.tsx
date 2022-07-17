import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './BackToTopButton.scss';

const BackToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
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
      {visible && (
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
