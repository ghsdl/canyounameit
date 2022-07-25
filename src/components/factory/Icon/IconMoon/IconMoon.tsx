import Icon from '../Icon';
import { GiMoonBats } from 'react-icons/gi';

interface IconMoonProps {
  onClick?: () => void;
  className?: string;
}

const IconMoon = ({ onClick, className }: IconMoonProps) => (
  <Icon icon={<GiMoonBats />} onClick={onClick} className={className} />
);

export default IconMoon;
