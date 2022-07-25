import Icon from '../Icon';
import { WiDayLightWind } from 'react-icons/wi';

interface IconSunProps {
  onClick?: () => void;
  className?: string;
}

const IconSun = ({ onClick, className }: IconSunProps) => (
  <Icon icon={<WiDayLightWind />} onClick={onClick} className={className} />
);

export default IconSun;
