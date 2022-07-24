import { useContext, useState, useEffect } from 'react';
import { LightModeContext } from '../../../context/LightMode';
import IconMoon from '../../factory/Icon/IconMoon/IconMoon';
import IconSun from '../../factory/Icon/IconSun/IconSun';
import './LightMode.scss';

const LightMode = () => {
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
    <div className='lightMode'>
      {visible &&
        (lightMode ? (
          <IconMoon
            onClick={() => toggleLightMode()}
            className='lightMode__icon lightMode__position'
          />
        ) : (
          <IconSun
            onClick={() => toggleLightMode()}
            className='lightMode__icon lightMode__position'
          />
        ))}
    </div>
  );
};

export default LightMode;
