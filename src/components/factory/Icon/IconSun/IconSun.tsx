import Icon from '../Icon';
import { WiDayLightWind } from 'react-icons/wi';

interface IIconSunProps {
  onClick?: () => void;
  className?: string;
}

const IconSun = ({ onClick, className }: IIconSunProps) => {
  return (
    <Icon icon={<WiDayLightWind />} onClick={onClick} className={className} />
  );
};

export default IconSun;
