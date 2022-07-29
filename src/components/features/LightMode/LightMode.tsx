import { useContext, useState, useEffect } from 'react';
import { LightModeContext } from '../../../context/LightModeContext';
import Icon from '../../factory/Icon/Icon';
import { WiDayLightWind } from 'react-icons/wi';
import { GiMoonBats } from 'react-icons/gi';
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
          <Icon
            icon={<GiMoonBats />}
            onClick={() => setLightMode(!lightMode)}
            className="lightMode__icon lightMode__icon--position"
          />
        ) : (
          <Icon
            icon={<WiDayLightWind />}
            onClick={() => setLightMode(!lightMode)}
            className="lightMode__icon lightMode__icon--position"
          />
        ))}
    </div>
  );
};

export default LightMode;
