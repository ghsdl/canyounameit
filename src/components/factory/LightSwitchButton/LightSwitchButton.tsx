import { useContext, useState, useEffect } from 'react';
import { LightModeContext } from '../../../context/LightMode';
import Icon from '../Icon/Icon';
import './LightSwitchButton.scss';

const LightSwitchButton = () => {
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <div className='lightSwitchButton'>
      {visible && (
        <Icon
          icon={lightMode ? 'MOON' : 'SUN'}
          className='lightSwitchButton__icon lightSwitchButton__position'
          onClick={() => toggleLightMode()}
        />
      )}
    </div>
  );
};

export default LightSwitchButton;
