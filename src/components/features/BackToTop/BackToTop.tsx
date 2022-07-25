import { useState, useEffect } from 'react';
import IconArrowUp from '../../factory/Icon/IconArrowUp/IconArrowUp';
import './BackToTop.scss';

const BackToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) return setVisible(true);
      return setVisible(false);
    });
  }, []);

  return (
    <div className="backToTop">
      {visible && (
        <IconArrowUp
          className="backToTop__icon backToTop__position"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
        />
      )}
    </div>
  );
};

export default BackToTop;
