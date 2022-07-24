import { useContext, useState, useEffect } from 'react';
import { LightModeContext } from '../../../context/LightMode';
import IconMoon from '../Icon/IconMoon/IconMoon';
import IconSun from '../Icon/IconSun/IconSun';
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
      {visible &&
        (lightMode ? (
          <IconMoon
            onClick={() => toggleLightMode()}
            className='lightSwitchButton__icon lightSwitchButton__position'
          />
        ) : (
          <IconSun
            onClick={() => toggleLightMode()}
            className='lightSwitchButton__icon lightSwitchButton__position'
          />
        ))}
    </div>
  );
};

export default LightSwitchButton;
