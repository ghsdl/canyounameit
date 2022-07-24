import Icon from '../Icon';
import { IIconSunProps } from '../../../interfaces';
import { WiDayLightWind } from 'react-icons/wi';

const IconSun = ({ onClick, className }: IIconSunProps) => {
  return (
    <Icon icon={<WiDayLightWind />} onClick={onClick} className={className} />
  );
};

export default IconSun;
