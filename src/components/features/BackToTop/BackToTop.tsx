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

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="backToTop">
      {visible && (
        <IconArrowUp
          className="backToTop__icon backToTop__icon--position"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default BackToTop;
