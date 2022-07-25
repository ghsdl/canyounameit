import { useContext, useState, useEffect } from 'react';
import { LightModeContext } from '../../../context/LightModeContext';
import IconMoon from '../../factory/Icon/IconMoon/IconMoon';
import IconSun from '../../factory/Icon/IconSun/IconSun';
import './LightMode.scss';

const LightMode = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 300) return setVisible(true);
      return setVisible(false);
    });
  }, []);

  return (
    <div className="lightMode">
      {visible &&
        (lightMode ? (
          <IconMoon
            onClick={() => setLightMode()}
            className="lightMode__icon lightMode__icon--position"
          />
        ) : (
          <IconSun
            onClick={() => setLightMode()}
            className="lightMode__icon lightMode__icon--position"
          />
        ))}
    </div>
  );
};

export default LightMode;
