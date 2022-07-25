import Icon from '../Icon';
import { GiMoonBats } from 'react-icons/gi';

interface IIconMoonProps {
  onClick?: () => void;
  className?: string;
}

const IconMoon = ({ onClick, className }: IIconMoonProps) => (
  <Icon icon={<GiMoonBats />} onClick={onClick} className={className} />
);

export default IconMoon;
