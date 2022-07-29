import { useState, useEffect } from 'react';
import Icon from '../../factory/Icon/Icon';
import { FaAngleUp } from 'react-icons/fa';
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
        <Icon
          icon={<FaAngleUp />}
          onClick={handleClick}
          className="backToTop__icon backToTop__icon--position"
        />
      )}
    </div>
  );
};

export default BackToTop;
