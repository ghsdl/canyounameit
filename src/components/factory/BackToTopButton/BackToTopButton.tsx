import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './BackToTopButton.scss';

const BackToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <div className='backToTopButton'>
      {visible && (
        <Icon
          icon='ARROW_UP'
          className='backToTopButton__icon backToTopButton__position'
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        />
      )}
    </div>
  );
};

export default BackToTopButton;
